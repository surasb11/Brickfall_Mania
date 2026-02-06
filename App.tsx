import React, { useState, useRef, useCallback, useEffect } from 'react';
import { GameCanvas, GameHandle } from './components/GameCanvas';
import { Menu } from './components/Menu';
import { HUD } from './components/HUD';
import { GameOver } from './components/GameOver';
import { Tutorial } from './components/Tutorial';
import { GameConfig, GameState, Difficulty, ThemeType } from './types';
import { audioManager } from './services/audioManager';

const STORAGE_PREFIX = 'brickfall_best_';
const TUTORIAL_KEY = 'brickfall_tutorial_completed';

export default function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [fever, setFever] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [config, setConfig] = useState<GameConfig>({
    difficulty: Difficulty.STANDARD,
    theme: ThemeType.MIDNIGHT
  });
  
  const [perfectPopups, setPerfectPopups] = useState<{ id: number; text: string; x: number; y: number }[]>([]);
  const popupIdRef = useRef(0);
  const gameRef = useRef<GameHandle>(null);

  // Check if first time player
  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem(TUTORIAL_KEY);
    if (!hasSeenTutorial) {
      setShowTutorial(true);
    }
  }, []);

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
    if (gameState === GameState.PLAYING && !showTutorial) {
      gameRef.current?.handleInput();
    }
  };

  const closeTutorial = () => {
    localStorage.setItem(TUTORIAL_KEY, 'true');
    setShowTutorial(false);
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

      {showTutorial && <Tutorial onClose={closeTutorial} />}

      {gameState === GameState.MENU && (
        <>
          <Menu 
            config={config} 
            setConfig={setConfig} 
            onStart={handleStart} 
          />
          <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <button
                onClick={() => setShowTutorial(true)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs font-bold text-white/80 transition-all flex items-center gap-2 backdrop-blur-md"
            >
                <span className="text-base">❔</span>
                HOW TO PLAY
            </button>
            <a 
                href="/ios/index.html" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs font-bold text-white/80 transition-all flex items-center gap-2 backdrop-blur-md"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.202-.029 2.268-1.186c1.066-1.156.902-2.482.878-2.516zM5.894 1.15a.5.5 0 0 0-.584.36l-3.23 9.69a.5.5 0 1 0 .948.318l3.23-9.69a.5.5 0 0 0-.334-.578zm5.72 1.43a.5.5 0 0 0-.613.342l-3.23 9.69a.5.5 0 1 0 .948.318l3.23-9.69a.5.5 0 0 0-.305-.66zM15.485 11.23a.5.5 0 0 0-.63-.323l-9.69 3.23a.5.5 0 0 0 .318.948l9.69-3.23a.5.5 0 0 0 .305-.625z"/>
                </svg>
                iOS VERSION
            </a>
          </div>
        </>
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