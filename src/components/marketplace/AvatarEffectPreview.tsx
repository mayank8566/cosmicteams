'use client';

import NeonAvatarFrame, { NeonFrameStyle } from '@/components/NeonAvatarFrame';

interface AvatarEffectPreviewProps {
  effect: string;
}

const AvatarEffectPreview = ({ effect }: AvatarEffectPreviewProps) => {
  // For neon frame effects
  if (effect.includes('neon-')) {
    const frameType = effect.replace('neon-', '') as NeonFrameStyle;
    return <NeonAvatarFrame type={frameType} size={64} />;
  }
  
  return (
    <div className="relative w-16 h-16 mx-auto">
      <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-space-indigo to-space-purple">
        <span className="text-white font-bold">CT</span>
      </div>
      
      {/* Traditional frames - removed demo-based frames */}
      {effect === 'crown' && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L16 6L24 4L20 16H4L0 4L8 6L12 0Z" fill="#F7B928" />
          </svg>
        </div>
      )}
      
      {/* Cosmic aura effect */}
      {effect === 'cosmic-aura' && (
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-space-indigo via-space-purple to-space-cyan opacity-40 animate-pulse-slow cosmic-glow"></div>
      )}
      
      {/* Star effect */}
      {effect === 'stars' && (
        <>
          <div className="absolute -top-1 -right-1 text-space-gold animate-twinkle">★</div>
          <div className="absolute top-1 -left-2 text-space-gold animate-twinkle-delay-1">★</div>
          <div className="absolute -bottom-1 right-0 text-space-gold animate-twinkle-delay-2">★</div>
        </>
      )}
      
      {/* Halo effect */}
      {effect === 'halo' && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-4 rounded-full border-2 border-space-gold bg-space-gold/20"></div>
      )}
    </div>
  );
};

export default AvatarEffectPreview;