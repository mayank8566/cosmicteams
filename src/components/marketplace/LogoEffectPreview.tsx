'use client';

import { useState, useEffect } from 'react';

interface LogoEffectPreviewProps {
  effect: string;
}

const LogoEffectPreview = ({ effect }: LogoEffectPreviewProps) => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    if (effect === 'rotating') {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [effect]);
  
  return (
    <div className="relative w-16 h-16 mx-auto">
      <div 
        className={`
          w-full h-full rounded-full overflow-hidden border-2 
          ${effect === 'glowing' ? 'animate-pulse-slow border-space-gold' : ''}
          ${effect === 'plasma-ring' ? 'border-space-indigo' : ''}
          ${effect === 'neon-burst' ? 'border-none' : ''}
          ${effect === 'hologram' ? 'border-none' : ''}
          ${effect === 'fire-aura' ? 'border-none' : ''}
          ${!['glowing', 'plasma-ring', 'neon-burst', 'hologram', 'fire-aura'].includes(effect) ? 'border-white' : ''}
        `}
        style={effect === 'rotating' ? { transform: `rotate(${rotation}deg)` } : {}}
      >
        <div className={`
          w-full h-full flex items-center justify-center text-white font-bold
          ${effect === 'hologram' ? 'bg-transparent' : 'bg-gradient-to-br from-space-indigo to-space-purple'}
        `}>
          CT
        </div>
      </div>

      {/* Enhanced particle effect */}
      {effect === 'particles' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className={`absolute w-1 h-1 rounded-full animate-float-up`} 
              style={{ 
                backgroundColor: i % 3 === 0 ? '#F7B928' : i % 3 === 1 ? '#16BDE4' : '#614B8F',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Plasma ring effect */}
      {effect === 'plasma-ring' && (
        <div className="absolute inset-[-8px] rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 animate-neon-rotate rounded-full opacity-70"></div>
          <div className="absolute inset-[3px] bg-black rounded-full"></div>
        </div>
      )}

      {/* Neon burst effect */}
      {effect === 'neon-burst' && (
        <>
          <div className="absolute inset-[-4px] rounded-full border-2 border-neon-blue shadow-neon-blue animate-neon-pulse"></div>
          <div className="absolute inset-[-8px] rounded-full border border-neon-blue opacity-40 animate-neon-breathe"></div>
          <div className="absolute inset-[-12px] rounded-full border border-neon-blue opacity-20 animate-neon-breathe" style={{ animationDelay: '0.5s' }}></div>
        </>
      )}

      {/* Hologram effect */}
      {effect === 'hologram' && (
        <>
          <div className="absolute inset-0 rounded-full border border-cyan-400 opacity-80 animate-pulse-slow"></div>
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="border-b border-cyan-400/20" style={{ height: '10%', transform: `translateY(${i * 10}%)` }}></div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-cyan-400 font-bold animate-pulse-slow">CT</span>
          </div>
          <div className="absolute inset-[-2px] rounded-full border border-cyan-400/50 animate-neon-breathe"></div>
        </>
      )}

      {/* Fire aura effect */}
      {effect === 'fire-aura' && (
        <>
          <div className="absolute inset-[-5px] rounded-full overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 animate-neon-breathe"></div>
            <div className="absolute inset-[5px] rounded-full bg-gradient-to-br from-space-indigo to-space-purple flex items-center justify-center">
              <span className="text-white font-bold">CT</span>
            </div>
          </div>
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-2 bg-yellow-400 rounded-full animate-float-up" 
              style={{ 
                left: `${30 + Math.random() * 40}%`,
                top: `${70 + Math.random() * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${1 + Math.random()}s`,
                opacity: 0.7
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default LogoEffectPreview;