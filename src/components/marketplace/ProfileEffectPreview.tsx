'use client';

interface ProfileEffectPreviewProps {
  effect: string;
}

const ProfileEffectPreview = ({ effect }: ProfileEffectPreviewProps) => {
  return (
    <div className="w-full h-16 relative overflow-hidden rounded-md">
      <div className={`
        w-full h-full flex items-center justify-center text-xs text-white p-1 relative
        ${effect === 'cosmic-stars' ? 'bg-space-dark' : ''}
        ${effect === 'aurora-waves' ? 'bg-indigo-900' : ''}
        ${effect === 'plasma-field' ? 'bg-space-dark' : ''}
        ${effect === 'neon-grid' ? 'bg-black' : ''}
        ${effect === 'galaxy-swirl' ? 'bg-space-dark' : ''}
      `}>
        {/* Cosmic Stars Effect */}
        {effect === 'cosmic-stars' && (
          <>
            <div className="absolute inset-0 pointer-events-none cosmic-stars-bg">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute bg-white rounded-full animate-twinkle"
                  style={{
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
            <span className="relative z-10">COSMIC STARS</span>
          </>
        )}
        
        {/* Aurora Waves Effect */}
        {effect === 'aurora-waves' && (
          <>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute w-[200%] h-[10px] top-[20%] bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 animate-aurora-shift"></div>
              <div className="absolute w-[200%] h-[10px] top-[50%] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 animate-aurora-shift-delay"></div>
              <div className="absolute w-[200%] h-[10px] top-[80%] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 animate-aurora-shift-delay-2"></div>
            </div>
            <span className="relative z-10">AURORA WAVES</span>
          </>
        )}
        
        {/* Plasma Field Effect */}
        {effect === 'plasma-field' && (
          <>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute w-[40px] h-[40px] rounded-full bg-red-500/50 filter blur-xl animate-plasma-float"></div>
              <div className="absolute w-[30px] h-[30px] rounded-full bg-blue-500/50 filter blur-xl animate-plasma-float-delay"></div>
              <div className="absolute w-[35px] h-[35px] rounded-full bg-purple-500/50 filter blur-xl animate-plasma-float-delay-2"></div>
            </div>
            <span className="relative z-10">PLASMA FIELD</span>
          </>
        )}
        
        {/* Neon Grid Effect */}
        {effect === 'neon-grid' && (
          <>
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 4 }).map((_, i) => (
                <div 
                  key={`h${i}`}
                  className="absolute h-[1px] w-full bg-space-indigo shadow-glow animate-neon-pulse"
                  style={{
                    top: `${i * 33}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
              {Array.from({ length: 4 }).map((_, i) => (
                <div 
                  key={`v${i}`}
                  className="absolute w-[1px] h-full bg-space-indigo shadow-glow animate-neon-pulse"
                  style={{
                    left: `${i * 33}%`,
                    animationDelay: `${i * 0.2 + 0.1}s`,
                  }}
                />
              ))}
            </div>
            <span className="relative z-10">NEON GRID</span>
          </>
        )}
        
        {/* Galaxy Swirl Effect */}
        {effect === 'galaxy-swirl' && (
          <>
            <div className="absolute inset-[-50%] bg-conic-galaxy animate-slow-spin opacity-40"></div>
            <div className="absolute inset-0 bg-radial-fade"></div>
            <span className="relative z-10">GALAXY SWIRL</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileEffectPreview;