import React from 'react';
import { GameConfig, Difficulty, ThemeType } from '../types';

interface MenuProps {
  config: GameConfig;
  setConfig: (c: GameConfig) => void;
  onStart: () => void;
}

export const Menu: React.FC<MenuProps> = ({ config, setConfig, onStart }) => {
  
  const getThemeIcon = (type: ThemeType) => {
    switch (type) {
      case ThemeType.MIDNIGHT:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        );
      case ThemeType.SUNSET:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm9.193 8.197a.75.75 0 01-1.06 0 1.503 1.503 0 01-2.193 0 .75.75 0 01-1.06-1.06 3.003 3.003 0 004.313 0 .75.75 0 010 1.06zm-8.8 0a.75.75 0 01-1.06 0 3.003 3.003 0 004.313 0 .75.75 0 01-1.06 1.06 1.503 1.503 0 01-2.192 0 .75.75 0 010-1.06zm-6.04-1.393a.75.75 0 010 1.06l-1.5 1.5a.75.75 0 11-1.06-1.06l1.5-1.5a.75.75 0 011.06 0zm19.313 1.06a.75.75 0 011.06 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zM3.75 12a8.25 8.25 0 0116.5 0v1.5a.75.75 0 01-1.5 0V12a6.75 6.75 0 00-13.5 0v1.5a.75.75 0 01-1.5 0V12z" clipRule="evenodd" />
          </svg>
        );
      case ThemeType.GLACIER:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25v19.5M2.25 12h19.5M5.106 5.106l13.788 13.788M5.106 18.894L18.894 5.106" />
          </svg>
        );
    }
  };

  const getThemeClasses = (type: ThemeType, active: boolean) => {
    const base = "flex-1 flex flex-col items-center justify-center py-5 px-2 rounded-2xl gap-2 transition-all duration-500 border relative overflow-hidden group";
    
    if (type === ThemeType.MIDNIGHT) {
      return `${base} ${active ? 'bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 border-indigo-400 shadow-[0_0_30px_rgba(79,70,229,0.5)] scale-105' : 'bg-slate-900/40 border-white/5 opacity-40 hover:opacity-100 hover:bg-slate-900/60'}`;
    }
    if (type === ThemeType.SUNSET) {
      return `${base} ${active ? 'bg-gradient-to-br from-orange-800 via-red-950 to-orange-950 border-orange-400 shadow-[0_0_30px_rgba(234,88,12,0.5)] scale-105' : 'bg-orange-950/20 border-white/5 opacity-40 hover:opacity-100 hover:bg-orange-950/40'}`;
    }
    if (type === ThemeType.GLACIER) {
      return `${base} ${active ? 'bg-gradient-to-br from-cyan-800 via-blue-950 to-cyan-950 border-cyan-300 shadow-[0_0_30px_rgba(8,145,178,0.5)] scale-105' : 'bg-cyan-950/20 border-white/5 opacity-40 hover:opacity-100 hover:bg-cyan-950/40'}`;
    }
    return base;
  };

  const getThemeAccentColor = () => {
    switch (config.theme) {
      case ThemeType.MIDNIGHT: return 'rgba(79, 70, 229, 0.4)';
      case ThemeType.SUNSET: return 'rgba(234, 88, 12, 0.4)';
      case ThemeType.GLACIER: return 'rgba(8, 145, 178, 0.4)';
      default: return 'rgba(255, 255, 255, 0.2)';
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/60 backdrop-blur-md pointer-events-auto transition-all duration-500 p-6">
      
      {/* NEW NEON 3D TITLE */}
      <div className="flex flex-col items-center justify-center mb-12 transform -skew-y-2 scale-110 md:scale-125">
        <div className="flex items-end justify-center gap-2 md:gap-4 leading-none">
            <span className="text-5xl md:text-8xl logo-text logo-brick">BRICK</span>
            <span className="text-5xl md:text-8xl logo-text logo-fall">FALL</span>
        </div>
        <div className="mt-[-5px] md:mt-[-10px] z-10">
            <span className="text-6xl md:text-[7rem] logo-text logo-mania tracking-wide">MANIA</span>
        </div>
      </div>

      <div className="w-full max-w-[420px] mb-8">
        <span className="text-xs md:text-sm font-extrabold text-white/50 uppercase tracking-[3px] block mb-3 pl-1">Game Mode</span>
        <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-2xl gap-2 backdrop-blur-xl shadow-inner">
            {Object.values(Difficulty).map(d => (
                <button
                    key={d}
                    onClick={() => setConfig({ ...config, difficulty: d })}
                    className={`flex-1 py-4 rounded-xl text-sm md:text-base font-bold transition-all duration-300 relative overflow-hidden ${
                        config.difficulty === d 
                        ? 'bg-white text-black shadow-[0_10px_20px_-5px_rgba(255,255,255,0.3)] scale-[1.02] z-10' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                >
                    {config.difficulty === d && <div className="absolute inset-0 bg-white/10 animate-shimmer pointer-events-none" />}
                    <span className="relative z-10">{d}</span>
                </button>
            ))}
        </div>
      </div>

      <div className="w-full max-w-[420px] mb-12">
        <span className="text-xs md:text-sm font-extrabold text-white/50 uppercase tracking-[3px] block mb-3 pl-1">Environment</span>
        <div className="flex bg-white/5 border border-white/10 p-2 rounded-2xl gap-3 backdrop-blur-xl">
            {[ThemeType.MIDNIGHT, ThemeType.SUNSET, ThemeType.GLACIER].map(t => (
                <button
                    key={t}
                    onClick={() => setConfig({ ...config, theme: t })}
                    className={getThemeClasses(t, config.theme === t)}
                >
                    {config.theme === t && (
                        <>
                            <div className="absolute inset-0 bg-white/5 animate-glow pointer-events-none" />
                            <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-30" />
                        </>
                    )}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        {getThemeIcon(t)}
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{t}</span>
                    </div>
                </button>
            ))}
        </div>
      </div>

      <button 
        onClick={onStart} 
        className="btn-7 w-full max-w-[320px] font-[Outfit] font-black text-xl md:text-2xl"
        style={{ 
            boxShadow: `0 10px 40px -10px ${getThemeAccentColor()}`,
            borderColor: config.theme === ThemeType.MIDNIGHT ? 'rgba(79, 70, 229, 0.4)' : 
                        config.theme === ThemeType.SUNSET ? 'rgba(234, 88, 12, 0.4)' : 
                        'rgba(8, 145, 178, 0.4)'
        }}
      >
        <span>START CLIMB</span>
      </button>
    </div>
  );
};