import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { GameEngine } from '../game/engine';
import { GameConfig } from '../types';

interface GameCanvasProps {
  onScore: (score: number, fever: boolean) => void;
  onGameOver: (score: number) => void;
  onPerfect: (combo: number, fever: boolean) => void;
  config: GameConfig;
  isPlaying: boolean;
}

export interface GameHandle {
  handleInput: () => void;
  stop: () => void;
}

export const GameCanvas = forwardRef<GameHandle, GameCanvasProps>(({ onScore, onGameOver, onPerfect, config, isPlaying }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<GameEngine | null>(null);
  
  // Create a ref for callbacks to avoid stale closures in the GameEngine
  const callbacksRef = useRef({ onScore, onGameOver, onPerfect });

  // Always update the ref to the latest callbacks from props
  useEffect(() => {
    callbacksRef.current = { onScore, onGameOver, onPerfect };
  }, [onScore, onGameOver, onPerfect]);

  useImperativeHandle(ref, () => ({
    handleInput: () => {
      engineRef.current?.handleInput();
    },
    stop: () => {
        engineRef.current?.stop(true);
    }
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    // Use proxy functions that always call the current version of the callbacks
    const engine = new GameEngine(containerRef.current, {
      onScore: (s: number, f: boolean) => callbacksRef.current.onScore(s, f),
      onGameOver: (s: number) => callbacksRef.current.onGameOver(s),
      onPerfect: (c: number, f: boolean) => callbacksRef.current.onPerfect(c, f)
    });
    engineRef.current = engine;

    const handleResize = () => {
      if (containerRef.current) {
        engine.resize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      engine.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  useEffect(() => {
    if (isPlaying && engineRef.current) {
      engineRef.current.startGame(config);
    }
  }, [isPlaying, config]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full outline-none" 
      style={{ touchAction: 'none' }}
    />
  );
});

GameCanvas.displayName = 'GameCanvas';