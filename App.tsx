import React, { useState, useRef, useCallback, useEffect } from 'react';
import { GameCanvas, GameHandle } from './components/GameCanvas';
import { Menu } from './components/Menu';
import { HUD } from './components/HUD';
import { GameOver } from './components/GameOver';
import { GameConfig, GameState, Difficulty, ThemeType } from './types';
import { audioManager } from './services/audioManager';

const STORAGE_PREFIX = 'brickfall_best_';

export default function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [fever, setFever] = useState(false);
  const [config, setConfig] = useState<GameConfig>({
    difficulty: Difficulty.STANDARD,
    theme: ThemeType.MIDNIGHT
  });
  
  const [perfectPopups, setPerfectPopups] = useState<{ id: number; text: string; x: number; y: number }[]>([]);
  const popupIdRef = useRef(0);
  const gameRef = useRef<GameHandle>(null);

  // Load High Score when difficulty changes
  useEffect(() => {
    const key = `${STORAGE_PREFIX}${config.difficulty}`;
    const saved = localStorage.getItem(key);
    setBestScore(saved ? parseInt(saved, 10) : 0);
  }, [config.difficulty]);

  const handleStart = () => {
    audioManager.init();
    setScore(0);
    setFever(false);
    setGameState(GameState.PLAYING);
    setPerfectPopups([]);
  };

  const handleStop = () => {
      gameRef.current?.stop();
      setGameState(GameState.MENU);
  };

  const handleScore = useCallback((newScore: number, isFever: boolean) => {
    setScore(newScore);
    setFever(isFever);
  }, []);

  const handleGameOver = useCallback((finalScore: number) => {
    setScore(finalScore); 
    const key = `${STORAGE_PREFIX}${config.difficulty}`;
    const saved = localStorage.getItem(key);
    const currentBest = saved ? parseInt(saved, 10) : 0;
    
    if (finalScore > currentBest) {
      localStorage.setItem(key, finalScore.toString());
      setBestScore(finalScore);
    } else {
      setBestScore(currentBest);
    }
    setGameState(GameState.GAME_OVER);
  }, [config.difficulty]);

  const handlePerfect = useCallback((combo: number, isFever: boolean) => {
    const id = popupIdRef.current++;
    const text = isFever ? `FEVER x${combo}!` : (combo > 1 ? `PERFECT x${combo}` : "PERFECT!");
    setPerfectPopups(prev => [...prev, { id, text, x: 50, y: 40 }]); 
    setTimeout(() => {
      setPerfectPopups(prev => prev.filter(p => p.id !== id));
    }, 800);
  }, []);

  const handleInput = (e: React.MouseEvent | React.TouchEvent) => {
    if (gameState === GameState.PLAYING) {
      gameRef.current?.handleInput();
    }
  };

  return (
    <div 
      className="relative w-full h-screen bg-black overflow-hidden font-outfit select-none" 
      onMouseDown={handleInput}
      onTouchStart={handleInput}
    >
      <GameCanvas 
        ref={gameRef}
        onScore={handleScore}
        onGameOver={handleGameOver}
        onPerfect={handlePerfect}
        config={config}
        isPlaying={gameState === GameState.PLAYING}
      />

      {perfectPopups.map(p => (
          <div 
            key={p.id}
            className="fixed pointer-events-none text-3xl font-black text-white uppercase z-50 animate-perfect whitespace-nowrap"
            style={{ left: `${p.x}%`, top: `${p.y}%`, textShadow: '0 0 15px rgba(255,255,255,0.5)' }}
          >
              {p.text}
          </div>
      ))}

      {gameState === GameState.MENU && (
        <Menu 
          config={config} 
          setConfig={setConfig} 
          onStart={handleStart} 
        />
      )}

      {gameState === GameState.PLAYING && (
        <HUD 
          score={score} 
          best={bestScore} 
          fever={fever}
          theme={config.theme}
          onBack={handleStop}
        />
      )}

      {gameState === GameState.GAME_OVER && (
        <GameOver 
          score={score} 
          best={bestScore}
          difficulty={config.difficulty}
          theme={config.theme}
          onRetry={handleStart}
          onMenu={() => setGameState(GameState.MENU)}
        />
      )}
    </div>
  );
}