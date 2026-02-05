import React from 'react';
import { ThemeType } from '../types';

interface HUDProps {
  score: number;
  best: number;
  fever: boolean;
  theme: ThemeType;
  onBack: () => void;
}

export const HUD: React.FC<HUDProps> = ({ score, best, fever, theme, onBack }) => {
  const getAccentColor = () => {
    switch (theme) {
      case ThemeType.SUNSET: return '#ea580c'; // orange-600
      case ThemeType.GLACIER: return '#0891b2'; // cyan-600
      case ThemeType.MIDNIGHT: 
      default: return '#4f46e5'; // indigo-600
    }
  };
  const accent = getAccentColor();

  const getThemeBackground = () => {
    switch (theme) {
      case ThemeType.MIDNIGHT:
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-transparent" />
          </div>
        );
      case ThemeType.SUNSET:
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/15 via-purple-900/10 to-transparent" />
          </div>
        );
      case ThemeType.GLACIER:
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-blue-900/5 to-transparent border-t border-white/5" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col items-center z-10">
        
        {/* Environment Background Overlay */}
        {getThemeBackground()}

        {/* Top Bar */}
        <div className="w-full flex justify-between items-start p-4 md:p-8 pt-6 md:pt-10 relative z-20">
            {/* Back Button */}
            <button 
            onClick={onBack}
            className="pointer-events-auto w-14 h-14 flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all active:scale-95"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fillRule="evenodd" className="w-full h-full drop-shadow-xl">
                <path fill={accent} d="M4 14v36c0 5.523 4.477 10 10 10h36a10.001 10.001 0 0 0 10-10V14A10.001 10.001 0 0 0 50 4H14C8.477 4 4 8.477 4 14zm4 36V14a6 6 0 0 1 6-6h36c1.591 0 3.117.632 4.243 1.757A6.003 6.003 0 0 1 56 14v36a6.003 6.003 0 0 1-1.757 4.243A6.003 6.003 0 0 1 50 56H14a6 6 0 0 1-6-6zm23-25.971V16a2 2 0 0 0-3.371-1.456l-17 16a1.999 1.999 0 0 0 .021 2.931l17 15.559A1.999 1.999 0 0 0 31 47.559v-8.697c8.086-.29 13.189 3.561 18.323 11.463A1.998 1.998 0 0 0 53 49.235v-8.13c0-9.292-7.46-16.862-16.75-16.999L31 24.029zM27 26a2 2 0 0 0 1.971 2l7.22.106C43.296 28.21 49 33.999 49 41.105v2.036c-5.429-6.398-11.428-9.043-20.207-8.13A2 2 0 0 0 27 37v6.017L14.94 31.98 27 20.629z"/>
            </svg>
            </button>

            {/* Score Display (Center/Top) */}
            <div className="absolute top-10 md:top-12 left-1/2 -translate-x-1/2 text-center transition-opacity duration-500 pointer-events-none">
                <p className="text-xs md:text-sm font-bold opacity-60 uppercase tracking-[3px] mb-2" style={{ color: fever ? 'var(--fever-color)' : 'white' }}>
                    Best: {best}
                </p>
                <h2 className={`text-6xl md:text-8xl font-extrabold leading-none tracking-tighter transition-all duration-300 drop-shadow-2xl ${fever ? 'fever-text scale-110' : 'text-white'}`}>
                    {score}
                </h2>
            </div>
        </div>
      </div>

      {/* Fever Banner */}
      {fever && (
          <div className="fixed top-[140px] left-1/2 -translate-x-1/2 font-extrabold text-2xl md:text-4xl tracking-[6px] uppercase fever-text pointer-events-none z-20 animate-pulse whitespace-nowrap drop-shadow-2xl">
              FEVER MODE
          </div>
      )}
    </>
  );
};