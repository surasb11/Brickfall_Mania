import React from 'react';
import { ThemeType } from '../types';

interface GameOverProps {
  score: number;
  best: number;
  difficulty: string;
  theme: ThemeType;
  onRetry: () => void;
  onMenu: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ score, best, difficulty, theme, onRetry, onMenu }) => {
  const getThemeColorClass = () => {
    switch (theme) {
      case ThemeType.SUNSET: return 'text-orange-500';
      case ThemeType.GLACIER: return 'text-cyan-500';
      case ThemeType.MIDNIGHT: 
      default: return 'text-indigo-500';
    }
  };

  const getFillColor = () => {
    switch (theme) {
      case ThemeType.SUNSET: return '#f97316'; // orange-500
      case ThemeType.GLACIER: return '#06b6d4'; // cyan-500
      case ThemeType.MIDNIGHT: 
      default: return '#6366f1'; // indigo-500
    }
  };

  const accentText = getThemeColorClass();
  const fillAccent = getFillColor();

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/90 backdrop-blur-md p-6">
        
      <div className={`text-xs md:text-sm font-extrabold uppercase tracking-[4px] mb-12 ${accentText}`}>
          Game Mode: {difficulty}
      </div>

      <div className="flex gap-8 md:gap-16 items-start justify-center w-full max-w-lg">
          {/* Left Col */}
          <div className="flex flex-col items-center flex-1 text-center">
              <div className="mb-10 md:mb-14">
                  <span className="block text-xs md:text-sm font-extrabold opacity-50 uppercase tracking-[3px] mb-3">Score</span>
                  <span className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight">{score}</span>
              </div>
              <button onClick={onRetry} className="flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform opacity-100 hover:opacity-80 group py-2">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-14 h-14 md:w-16 md:h-16 transition-transform group-active:scale-95 drop-shadow-lg">
                    <g fill={fillAccent}>
                        <path d="m45.534 23.057-2.447 1.259v-1.54c0-3.706-.933-7.385-2.935-10.508-5.562-8.689-17.049-11.505-25.981-5.835-1.574 1.003-.467 3.583 1.376 3.019 3.889-1.191 7.779-.523 10.725 1.215 3.682 2.145 6.289 6.051 6.289 10.728 0 1.283 0 2.912.008 2.92l-2.413-1.25c-1.583-.813-3.209 1.035-2.191 2.499l8.471 12.185c.676.976 2.131.976 2.807 0l8.479-12.193c1.021-1.472-.604-3.32-2.188-2.499z"/>
                        <path d="m32.452 38.549c-3.888 1.191-7.779.523-10.725-1.216-3.672-2.139-6.289-6.04-6.289-10.728 0-1.284 0-2.912-.008-2.92l2.413 1.25c1.583.813 3.209-1.036 2.191-2.498l-8.471-12.185c-.676-.976-2.131-.976-2.807 0l-8.48 12.193c-1.018 1.472.608 3.32 2.191 2.499l2.447-1.258c0 3.968.235 7.837 2.935 12.048 2.772 4.33 6.965 7.11 11.338 8.206 5.004 1.263 10.222.435 14.643-2.373 1.574-1 .466-3.584-1.378-3.018z"/>
                    </g>
                 </svg>
                 <span className={`text-xs md:text-sm font-extrabold uppercase tracking-widest ${accentText}`}>Try Again</span>
              </button>
          </div>

          {/* Right Col */}
          <div className="flex flex-col items-center flex-1 text-center">
              <div className="mb-10 md:mb-14">
                  <span className="block text-xs md:text-sm font-extrabold opacity-50 uppercase tracking-[3px] mb-3">Best Score</span>
                  <span className="text-5xl md:text-7xl font-extrabold leading-none opacity-60">{best}</span>
              </div>
              <button onClick={onMenu} className="flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform opacity-100 hover:opacity-80 group py-2">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.467 8.467" className="w-14 h-14 md:w-16 md:h-16 transition-transform group-active:scale-95 drop-shadow-lg">
                    <path fill={fillAccent} d="M1.587.794a.798.798 0 0 0-.793.795v1.39c0 .435.357.793.793.793h1.39a.798.798 0 0 0 .795-.793V1.59a.8.8 0 0 0-.795-.795zm0 .529h1.39a.26.26 0 0 1 .266.266v1.39a.259.259 0 0 1-.266.264h-1.39a.259.259 0 0 1-.266-.264V1.59a.26.26 0 0 1 .266-.266z" />
                    <path fill={fillAccent} style={{ opacity: 0.7 }} d="M6.495 1.027a.801.801 0 0 0-1.128-.001l-.945.944c-.31.31-.31.82 0 1.13l.945.945c.31.31.818.308 1.128-.001l.945-.945a.8.8 0 0 0 0-1.127zm-.374.374.944.945c.11.108.11.27.001.38l-.944.944a.263.263 0 0 1-.381 0l-.944.944a.263.263 0 0 1 0-.38l.945-.945a.262.262 0 0 1 .38 0z" />
                    <g fill={fillAccent}>
                        <path d="M1.587 4.429a.797.797 0 0 0-.793.792V6.88c0 .435.357.793.793.793h1.39a.798.798 0 0 0 .795-.793V5.22a.798.798 0 0 0-.795-.792zm0 .529h1.39c.151 0 .266.112.266.263V6.88a.259.259 0 0 1-.266.263h-1.39a.259.259 0 0 1-.266-.263V5.22c0-.15.114-.263.266-.263zM5.212 4.688a.8.8 0 0 0-.795.795V6.88c0 .435.36.793.795.793h1.666a.798.798 0 0 0 .795-.793V5.483a.8.8 0 0 0-.795-.795zm0 .53h1.666a.26.26 0 0 1 .265.265V6.88a.259.259 0 0 1-.265.263H5.212a.259.259 0 0 1-.266-.263V5.483a.26.26 0 0 1 .266-.265z" />
                    </g>
                 </svg>
                 <span className={`text-xs md:text-sm font-extrabold uppercase tracking-widest ${accentText}`}>Main Menu</span>
              </button>
          </div>
      </div>
    </div>
  );
};