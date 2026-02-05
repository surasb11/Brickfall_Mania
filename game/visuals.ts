import * as THREE from 'three';
import { ThemeType } from '../types';

// Progression configs from reference
const PROGRESSION = {
    CAVE: { bg: 0x1a1512, fog: 0x1a1512, hue: 0.08 },   // Earthy Cave
    SUNSET: { bg: 0x2e0a1a, fog: 0x2e0a1a, hue: 0.04 }, // Sunset
    SPACE: { bg: 0x020205, fog: 0x020205, hue: 0.62 }   // Deep Space
};

const THEMES: Record<ThemeType, { bg: number, fog: number, hue: number }> = {
  [ThemeType.MIDNIGHT]: { bg: 0x020205, fog: 0x020205, hue: 0.62 },
  [ThemeType.SUNSET]: { bg: 0x1a0a2e, fog: 0x1a0a2e, hue: 0.04 },
  [ThemeType.GLACIER]: { bg: 0xeef5f5, fog: 0xeef5f5, hue: 0.5 } // Kept for type safety, mapped to space-like behavior
};

export class ThemeManager {
  private scene: THREE.Scene;
  public currentColor: THREE.Color;
  private currentBaseHue: number;
  private selection: ThemeType = ThemeType.MIDNIGHT;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.currentColor = new THREE.Color(THEMES[ThemeType.MIDNIGHT].bg);
    this.currentBaseHue = THEMES[ThemeType.MIDNIGHT].hue;
  }

  setSelection(key: ThemeType) {
    this.selection = key;
    const t = THEMES[key];
    this.currentColor.setHex(t.bg);
    this.currentBaseHue = t.hue;
    
    this.scene.background = this.currentColor.clone();
    if (this.scene.fog) {
        (this.scene.fog as THREE.Fog).color.copy(this.currentColor);
    }
  }

  update(score: number, delta: number) {
    // Visual Progression based on score milestones
    let targetConfig;
    if (score < 20) targetConfig = PROGRESSION.CAVE;
    else if (score < 50) targetConfig = PROGRESSION.SUNSET;
    else targetConfig = PROGRESSION.SPACE;

    const targetCol = new THREE.Color(targetConfig.bg);
    
    // Smoothly interpolate background color
    if (!this.currentColor.equals(targetCol)) {
        this.currentColor.lerp(targetCol, 1.0 * delta);
        this.scene.background = this.currentColor.clone();
        if (this.scene.fog) {
            (this.scene.fog as THREE.Fog).color.copy(this.currentColor);
        }
    }
    this.currentBaseHue = targetConfig.hue;
  }

  getBrickColor(score: number, index: number): THREE.Color {
    // Use the progression hue if score > 0, otherwise fallback to selection
    const baseHue = this.currentBaseHue;
    const scoreShift = (score * 0.008); 
    const stackShift = (index * 0.015);
    return new THREE.Color().setHSL((baseHue + scoreShift + stackShift) % 1, 0.75, 0.5);
  }
}