import React, { useState } from 'react';

interface TutorialProps {
  onClose: () => void;
}

const steps = [
  {
    title: "WELCOME CLIMBER",
    content: "Brickfall Mania is a game of precision and timing. Your goal is to stack blocks as high as you can without missing.",
    icon: "🏗️",
    accent: "#9333ea"
  },
  {
    title: "HOW TO PLAY",
    content: "Tap or Click anywhere on the screen to drop the moving block. Try to align it perfectly with the one below!",
    icon: "🎯",
    accent: "#f97316"
  },
  {
    title: "PERFECT STACK",
    content: "Landing a block perfectly increases your combo. Get 10 in a row to enter FEVER MODE for double points and stack regrowth!",
    icon: "🔥",
    accent: "#ff00ff"
  },
  {
    title: "GAME MODES",
    content: "Standard mode is fixed speed. Speedy mode gets faster with every block! Choose your challenge in the menu.",
    icon: "⚡",
    accent: "#06b6d4"
  }
];

export const Tutorial: React.FC<TutorialProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const step = steps[currentStep];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-500">
      <div 
        className="w-full max-w-md ios-glass rounded-[40px] p-8 relative overflow-hidden flex flex-col items-center text-center shadow-2xl border-white/20"
        style={{ borderColor: step.accent + '44' }}
      >
        {/* Decorative Background Glow */}
        <div 
          className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] opacity-30 transition-colors duration-700"
          style={{ backgroundColor: step.accent }}
        />
        <div 
          className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-30 transition-colors duration-700"
          style={{ backgroundColor: step.accent }}
        />

        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${i === currentStep ? 'w-8' : 'w-2 bg-white/10'}`}
              style={{ backgroundColor: i === currentStep ? step.accent : undefined }}
            />
          ))}
        </div>

        {/* Icon */}
        <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300 drop-shadow-lg">
          {step.icon}
        </div>

        {/* Text Content */}
        <h2 
          className="text-3xl font-black mb-4 tracking-wider font-outfit"
          style={{ color: 'white', textShadow: `0 0 20px ${step.accent}66` }}
        >
          {step.title}
        </h2>
        
        <p className="text-white/70 text-lg leading-relaxed mb-10 font-medium">
          {step.content}
        </p>

        {/* Actions */}
        <div className="w-full space-y-4">
          <button 
            onClick={next}
            className="w-full py-5 rounded-2xl text-xl font-black text-white transition-all active:scale-95 shadow-xl"
            style={{ 
              backgroundColor: step.accent,
              boxShadow: `0 10px 30px -5px ${step.accent}66`
            }}
          >
            {currentStep === steps.length - 1 ? "GOT IT!" : "NEXT"}
          </button>
          
          <button 
            onClick={onClose}
            className="w-full py-2 text-white/30 text-sm font-bold tracking-widest uppercase hover:text-white/60 transition-colors"
          >
            Skip Tutorial
          </button>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12" style={{ backgroundSize: '200% 100%' }} />
        </div>
      </div>
    </div>
  );
};