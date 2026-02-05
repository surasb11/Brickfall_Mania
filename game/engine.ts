import * as THREE from 'three';
import { ThemeManager } from './visuals';
import { audioManager } from '../services/audioManager';
import { Difficulty, GameConfig, GameState, ThemeType } from '../types';

interface StackLayer {
    mesh: THREE.Mesh;
    x: number;
    z: number;
    w: number;
    d: number;
    y: number;
    color: THREE.Color;
    bounceTime: number;
}

interface Debris {
    mesh: THREE.Mesh;
    vx: number;
    vy: number;
    vz: number;
    rot: number;
    life: number;
}

const CONFIG = {
    BOX_HEIGHT: 2, 
    ORIGINAL_SIZE: 20,
    SPEED_INC: 0.5,
    MAX_SPEED: 100,
    PERFECT_THRESHOLD: 0.25, 
    BOUNCE_LIMIT: 26,
    VIEW_DISTANCE: 50,
    BOUNCE_DUR: 0.4,
    PARTICLE_COUNT: 400
};

export class GameEngine {
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private themeManager: ThemeManager;
  private dirLight: THREE.DirectionalLight;

  private stack: StackLayer[] = [];
  private debris: Debris[] = [];
  private moving: THREE.Mesh | null = null;
  
  // Background Particles
  private particles: THREE.Points | null = null;
  private particleVelocities: Float32Array | null = null;

  private score: number = 0;
  private combo: number = 0;
  private axis: 'x' | 'z' = 'x';
  private dir: number = 1;
  private speed: number = 25;
  private isGameOver: boolean = false;
  private isPlaying: boolean = false;
  private fever: boolean = false;
  
  // Transition lock to prevent input spam
  private isTransitioning: boolean = false; 

  // Weather variables
  private weatherPhase: number = 0;

  private frameId: number | null = null;
  private clock: THREE.Clock;
  private config: GameConfig = { difficulty: Difficulty.STANDARD, theme: ThemeType.MIDNIGHT };

  private callbacks: {
    onScore: (score: number, fever: boolean) => void;
    onGameOver: (score: number) => void;
    onPerfect: (combo: number, fever: boolean) => void;
  };

  constructor(container: HTMLElement, callbacks: any) {
    this.callbacks = callbacks;
    this.clock = new THREE.Clock();

    // Scene Setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x020205);
    this.scene.fog = new THREE.Fog(0x020205, 25, 50);

    const aspect = container.clientWidth / container.clientHeight;
    const d = CONFIG.VIEW_DISTANCE;
    this.camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, -100, 1000);
    this.camera.position.set(15, 15, 15);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    this.dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    this.dirLight.position.set(10, 40, 20);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.scene.add(this.dirLight);
    this.scene.add(this.dirLight.target);

    this.themeManager = new ThemeManager(this.scene);
    
    this.render();
  }

  private initParticles(theme: ThemeType) {
    if (this.particles) {
      this.scene.remove(this.particles);
      this.particles.geometry.dispose();
      (this.particles.material as THREE.Material).dispose();
    }

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(CONFIG.PARTICLE_COUNT * 3);
    const velocities = new Float32Array(CONFIG.PARTICLE_COUNT * 3);

    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      if (theme === ThemeType.SUNSET) {
        velocities[i * 3] = (Math.random() - 0.5) * 2;
        velocities[i * 3 + 1] = 2 + Math.random() * 5;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 2;
      } else if (theme === ThemeType.GLACIER) {
        velocities[i * 3] = (Math.random() - 0.5) * 3;
        velocities[i * 3 + 1] = -2 - Math.random() * 4;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 3;
      } else {
        velocities[i * 3] = (Math.random() - 0.5) * 0.5;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.particleVelocities = velocities;

    let color = 0xffffff;
    let size = 0.1;
    let opacity = 0.3;

    if (theme === ThemeType.SUNSET) {
      color = 0xffaa44;
      size = 0.12;
      opacity = 0.5;
    } else if (theme === ThemeType.GLACIER) {
      color = 0xccffff;
      size = 0.15;
      opacity = 0.4;
    }

    const material = new THREE.PointsMaterial({
      color,
      size,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private updateParticles(delta: number) {
    if (!this.particles || !this.particleVelocities) return;

    const positions = this.particles.geometry.attributes.position.array as Float32Array;
    const v = this.particleVelocities;

    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
      positions[i * 3] += v[i * 3] * delta;
      positions[i * 3 + 1] += v[i * 3 + 1] * delta;
      positions[i * 3 + 2] += v[i * 3 + 2] * delta;

      const topY = this.stack.length > 0 ? this.stack[this.stack.length - 1].y : 0;
      const bound = 40;

      if (positions[i * 3] < -bound) positions[i * 3] = bound;
      if (positions[i * 3] > bound) positions[i * 3] = -bound;
      if (positions[i * 3 + 1] < topY - bound) positions[i * 3 + 1] = topY + bound;
      if (positions[i * 3 + 1] > topY + bound) positions[i * 3 + 1] = topY - bound;
      if (positions[i * 3 + 2] < -bound) positions[i * 3 + 2] = bound;
      if (positions[i * 3 + 2] > bound) positions[i * 3 + 2] = -bound;
    }

    this.particles.geometry.attributes.position.needsUpdate = true;
  }

  resize(width: number, height: number) {
    const aspect = width / height;
    const d = CONFIG.VIEW_DISTANCE;
    this.camera.left = -d * aspect;
    this.camera.right = d * aspect;
    this.camera.top = d;
    this.camera.bottom = -d;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  startGame(config: GameConfig) {
    this.config = config;
    this.isPlaying = true;
    this.isGameOver = false;
    this.score = 0;
    this.combo = 0;
    this.axis = 'x';
    this.dir = 1;
    this.fever = false;
    this.isTransitioning = false;
    this.weatherPhase = 0;

    // Apply strict speed rules per difficulty
    this.speed = config.difficulty === Difficulty.STANDARD ? 25 : 20;

    this.cleanupMeshes();
    this.themeManager.setSelection(config.theme);
    this.initParticles(config.theme);
    
    this.addLayer(0, 0, CONFIG.ORIGINAL_SIZE, CONFIG.ORIGINAL_SIZE, 0);
    this.spawnNext();
    
    this.callbacks.onScore(0, false);

    if (!this.frameId) {
        this.clock.start();
        this.loop();
    }
  }

  handleInput() {
    if (!this.isPlaying || this.isGameOver || !this.moving || this.isTransitioning) return;
    this.isTransitioning = true;

    const top = this.stack[this.stack.length - 1];
    const cur = this.moving;
    let delta, overlap, isPerf = false;

    if (this.axis === 'x') {
        delta = cur.position.x - top.x;
        overlap = top.w - Math.abs(delta);
        if (overlap <= 0) {
            this.stop(false);
            return;
        }

        if (Math.abs(delta) < CONFIG.PERFECT_THRESHOLD) {
            delta = 0; overlap = top.w; isPerf = true;
        } else {
            this.combo = 0;
            const ds = Math.abs(delta);
            const dp = top.x + (delta > 0 ? top.w/2 + ds/2 : -top.w/2 - ds/2);
            this.spawnDebris(dp, cur.position.y, cur.position.z, ds, top.d, top.color);
        }
        
        this.scene.remove(cur);
        this.addLayer(top.x + delta/2, top.z, overlap, top.d, this.score);

    } else {
        delta = cur.position.z - top.z;
        overlap = top.d - Math.abs(delta);
        if (overlap <= 0) {
            this.stop(false);
            return;
        }

        if (Math.abs(delta) < CONFIG.PERFECT_THRESHOLD) {
            delta = 0; overlap = top.d; isPerf = true;
        } else {
            this.combo = 0;
            const ds = Math.abs(delta);
            const dp = top.z + (delta > 0 ? top.d/2 + ds/2 : -top.d/2 - ds/2);
            this.spawnDebris(cur.position.x, cur.position.y, dp, top.w, ds, top.color);
        }

        this.scene.remove(cur);
        this.addLayer(top.x, top.z + delta/2, top.w, overlap, this.score);
    }

    if (isPerf) {
        this.combo++;
        audioManager.playPerfect(this.combo);
        if (this.combo > 0 && this.combo % 5 === 0) {
            this.regrowStack(1.2);
        }
        if (this.combo >= 10) {
            this.fever = true;
        }
        this.callbacks.onPerfect(this.combo, this.fever);
    } else {
        this.fever = false;
        audioManager.playLand(0);
    }

    this.score += this.fever ? 2 : 1;
    this.callbacks.onScore(this.score, this.fever);

    // SPEEDY mode increment
    if (this.config.difficulty === Difficulty.SPEEDY) {
        this.speed = Math.min(this.speed + CONFIG.SPEED_INC, CONFIG.MAX_SPEED);
    }

    this.axis = this.axis === 'x' ? 'z' : 'x';
    this.spawnNext();
  }

  private addLayer(x: number, z: number, w: number, d: number, score: number) {
    const idx = this.stack.length;
    const y = (idx * CONFIG.BOX_HEIGHT);
    const col = this.themeManager.getBrickColor(score, idx);
    
    const geo = new THREE.BoxGeometry(w, CONFIG.BOX_HEIGHT, d);
    const mat = new THREE.MeshStandardMaterial({ 
        color: col, emissive: col, emissiveIntensity: 0.1, roughness: 0.2, metalness: 0.3 
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    const edges = new THREE.EdgesGeometry(geo);
    const outerEdges = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.45 }));
    const innerEdges = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 }));
    mesh.add(outerEdges);
    mesh.add(innerEdges);

    this.scene.add(mesh);
    this.stack.push({ mesh, x, z, w, d, y, color: col, bounceTime: 1.0 });
  }

  private spawnNext() {
    const top = this.stack[this.stack.length - 1];
    const y = top.y + CONFIG.BOX_HEIGHT;
    const col = this.themeManager.getBrickColor(this.score, this.stack.length);
    
    const geo = new THREE.BoxGeometry(top.w, CONFIG.BOX_HEIGHT, top.d);
    const mat = new THREE.MeshStandardMaterial({ 
        color: col, emissive: col, emissiveIntensity: 0.1, roughness: 0.2, metalness: 0.3 
    });
    
    this.moving = new THREE.Mesh(geo, mat);
    this.moving.castShadow = true;
    
    const edges = new THREE.EdgesGeometry(geo);
    const outerEdges = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.45 }));
    const innerEdges = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 }));
    this.moving.add(outerEdges);
    this.moving.add(innerEdges);

    this.dir = Math.random() > 0.5 ? 1 : -1;
    const start = this.dir === 1 ? -CONFIG.BOUNCE_LIMIT : CONFIG.BOUNCE_LIMIT;

    if (this.axis === 'x') this.moving.position.set(start, y, top.z);
    else this.moving.position.set(top.x, y, start);

    this.scene.add(this.moving);
    this.isTransitioning = false;
  }

  private spawnDebris(x: number, y: number, z: number, w: number, d: number, col: THREE.Color) {
    const geo = new THREE.BoxGeometry(w, CONFIG.BOX_HEIGHT, d);
    const mat = new THREE.MeshStandardMaterial({ color: col, transparent: true, opacity: 0.7 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    this.scene.add(mesh);

    this.debris.push({
        mesh,
        vy: 0,
        vx: (Math.random()-0.5)*5,
        vz: (Math.random()-0.5)*5,
        rot: Math.random()*5,
        life: 1.0
    });
  }

  private regrowStack(amt: number) {
    const top = this.stack[this.stack.length - 1];
    top.w = Math.min(top.w + amt, CONFIG.ORIGINAL_SIZE);
    top.d = Math.min(top.d + amt, CONFIG.ORIGINAL_SIZE);
    
    top.mesh.geometry.dispose();
    top.mesh.geometry = new THREE.BoxGeometry(top.w, CONFIG.BOX_HEIGHT, top.d);
    
    top.mesh.children.forEach((child: any) => {
        if (child.geometry) child.geometry.dispose();
        child.geometry = new THREE.EdgesGeometry(top.mesh.geometry);
    });
  }

  public stop(forced = false) {
    this.isPlaying = false;
    this.isGameOver = true;
    this.fever = false;
    audioManager.playGameOver();
    
    if (this.moving) {
        this.scene.remove(this.moving);
        this.moving.geometry.dispose();
        (this.moving.material as THREE.Material).dispose();
        this.moving = null;
    }
    
    if (!forced) {
        this.callbacks.onGameOver(this.score);
    }
  }

  private loop = () => {
    this.frameId = requestAnimationFrame(this.loop);
    const delta = Math.min(this.clock.getDelta(), 0.1);
    const time = Date.now() * 0.005;

    // Fixed speed for Standard/Speedy modes without theme variation
    let currentSpeed = this.speed;

    if (this.isPlaying && this.moving) {
        const speedVal = currentSpeed * delta * this.dir;
        if (this.axis === 'x') {
            this.moving.position.x += speedVal;
            if (Math.abs(this.moving.position.x) >= CONFIG.BOUNCE_LIMIT) {
                this.dir *= -1;
                this.moving.position.x = Math.sign(this.moving.position.x) * CONFIG.BOUNCE_LIMIT;
            }
        } else {
            this.moving.position.z += speedVal;
            if (Math.abs(this.moving.position.z) >= CONFIG.BOUNCE_LIMIT) {
                this.dir *= -1;
                this.moving.position.z = Math.sign(this.moving.position.z) * CONFIG.BOUNCE_LIMIT;
            }
        }
    }

    this.stack.forEach(layer => {
        if (layer.bounceTime > 0) {
            layer.bounceTime -= delta * 3;
            const bounce = Math.sin(layer.bounceTime * 10) * layer.bounceTime * 0.12;
            layer.mesh.scale.set(1 + bounce, 1 - bounce, 1 + bounce);
        } else {
            layer.mesh.scale.set(1, 1, 1);
        }
    });

    for (let i = this.debris.length - 1; i >= 0; i--) {
        const d = this.debris[i];
        d.vy -= 20 * delta;
        d.mesh.position.y += d.vy * delta;
        d.mesh.position.x += d.vx * delta;
        d.mesh.position.z += d.vz * delta;
        d.mesh.rotation.x += d.rot * delta;
        d.life -= 1.2 * delta;
        (d.mesh.material as THREE.MeshStandardMaterial).opacity = d.life;
        if (d.life <= 0) {
            this.scene.remove(d.mesh);
            d.mesh.geometry.dispose();
            (d.mesh.material as THREE.Material).dispose();
            this.debris.splice(i, 1);
        }
    }

    this.themeManager.update(this.score, delta);
    this.updateParticles(delta);

    if (this.fever) {
        const p = (Math.sin(time * 2) + 1) / 2;
        const targetColor = this.themeManager.currentColor.clone();
        const pulseColor = new THREE.Color(0x330033);
        const blended = targetColor.lerp(pulseColor, p * 0.5);
        this.scene.background = blended;
        (this.scene.fog as THREE.Fog).color.copy(blended);
    }

    const topY = this.stack.length > 0 ? this.stack[this.stack.length - 1].y : 0;
    const targetCamY = topY + 10;
    this.camera.position.y += (targetCamY - this.camera.position.y) * 2 * delta;
    this.camera.lookAt(0, topY, 0);

    this.dirLight.position.y = topY + 40;
    this.dirLight.target.position.set(0, topY, 0);

    this.render();
  }

  private render() {
    this.renderer.render(this.scene, this.camera);
  }

  private cleanupMeshes() {
    this.stack.forEach(s => {
      this.scene.remove(s.mesh);
      s.mesh.geometry.dispose();
      (s.mesh.material as THREE.Material).dispose();
    });
    this.stack = [];
    this.debris.forEach(d => {
      this.scene.remove(d.mesh);
      d.mesh.geometry.dispose();
      (d.mesh.material as THREE.Material).dispose();
    });
    this.debris = [];
    if (this.moving) {
      this.scene.remove(this.moving);
      this.moving.geometry.dispose();
      (this.moving.material as THREE.Material).dispose();
      this.moving = null;
    }
    if (this.particles) {
        this.scene.remove(this.particles);
        this.particles.geometry.dispose();
        (this.particles.material as THREE.Material).dispose();
        this.particles = null;
    }
  }

  dispose() {
    if (this.frameId) cancelAnimationFrame(this.frameId);
    this.renderer.dispose();
    this.cleanupMeshes();
  }
}