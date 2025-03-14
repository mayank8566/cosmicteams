'use client';

import React from 'react';

export type NeonFrameStyle = 'inferno' | 'vortex' | 'shadow' | 'toxic' | 'cyber';

interface NeonAvatarFrameProps {
  type: NeonFrameStyle;
  size?: number;
  className?: string;
  children?: React.ReactNode;
}

const NeonAvatarFrame: React.FC<NeonAvatarFrameProps> = ({ 
  type, 
  size = 64, 
  className = '',
  children 
}) => {
  // Frame configurations with colors and animations
  const frameConfig = {
    inferno: {
      primaryColor: 'text-neon-red',
      shadowClass: 'shadow-neon-red',
      animationClass: 'animate-neon-breathe'
    },
    vortex: {
      primaryColor: 'text-neon-blue',
      shadowClass: 'shadow-neon-blue',
      animationClass: 'animate-neon-rotate'
    },
    shadow: {
      primaryColor: 'text-neon-purple',
      shadowClass: 'shadow-neon-purple',
      animationClass: 'animate-neon-flicker'
    },
    toxic: {
      primaryColor: 'text-neon-green',
      shadowClass: 'shadow-neon-green',
      animationClass: 'animate-neon-color-shift'
    },
    cyber: {
      primaryColor: 'text-neon-yellow',
      shadowClass: 'shadow-neon-yellow',
      animationClass: 'animate-neon-pulse-fast'
    }
  };

  const config = frameConfig[type];

  return (
    <div 
      className={`relative ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Content (typically an avatar) */}
      <div className="absolute inset-2 rounded-full overflow-hidden z-10">
        {children}
      </div>

      {/* Frame with neon effect */}
      <div 
        className={`absolute inset-0 rounded-full ${config.primaryColor} ${config.shadowClass} ${config.animationClass}`}
      >
        {/* Frame SVG - Customized per frame type */}
        {type === 'inferno' && (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
            <path d="M50 0 L55 10 L45 10 Z" fill="currentColor" transform="rotate(0 50 50)" />
            <path d="M50 0 L55 10 L45 10 Z" fill="currentColor" transform="rotate(90 50 50)" />
            <path d="M50 0 L55 10 L45 10 Z" fill="currentColor" transform="rotate(180 50 50)" />
            <path d="M50 0 L55 10 L45 10 Z" fill="currentColor" transform="rotate(270 50 50)" />
          </svg>
        )}

        {type === 'vortex' && (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" />
            <path d="M50 5 Q80 50 50 95 Q20 50 50 5 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        )}

        {type === 'shadow' && (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="3" />
            <path d="M20 20 L80 80" stroke="currentColor" strokeWidth="2" />
            <path d="M80 20 L20 80" stroke="currentColor" strokeWidth="2" />
            <path d="M50 10 L50 90" stroke="currentColor" strokeWidth="2" />
            <path d="M10 50 L90 50" stroke="currentColor" strokeWidth="2" />
          </svg>
        )}

        {type === 'toxic' && (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="3" />
            <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" stroke="currentColor" strokeWidth="4" />
            <path d="M25 25 L35 35 M65 65 L75 75 M25 75 L35 65 M65 35 L75 25" stroke="currentColor" strokeWidth="4" />
          </svg>
        )}

        {type === 'cyber' && (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="3" />
            <path d="M20 30 H80 M20 50 H80 M20 70 H80" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M30 20 V80 M50 20 V80 M70 20 V80" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default NeonAvatarFrame;
