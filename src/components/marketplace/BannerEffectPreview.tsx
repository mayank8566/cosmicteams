'use client';

interface BannerEffectPreviewProps {
  effect: string;
}

const BannerEffectPreview = ({ effect }: BannerEffectPreviewProps) => {
  return (
    <div className="w-full h-8 relative overflow-hidden rounded-md">
      <div className={`
        w-full h-full flex items-center justify-center text-xs text-white p-1
        ${effect === 'gradient' ? 'bg-gradient-to-r from-space-purple via-space-indigo to-space-cyan' : ''}
        ${effect === 'animated' ? 'bg-gradient-to-r from-space-purple via-space-indigo to-space-cyan bg-size-200 animate-gradient-x' : ''}
        ${effect === 'cosmic' ? 'bg-space-dark cosmic-stars' : ''}
        ${effect === 'sparkle' ? 'bg-space-dark' : ''}
        ${effect === 'neon-pulse' ? 'bg-black border border-neon-blue animate-neon-breathe text-neon-blue' : ''}
        ${effect === 'cyber-grid' ? 'bg-black relative' : ''}
        ${effect === 'flame-wave' ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-size-200 animate-gradient-x' : ''}
      `}>
        {effect === 'cyber-grid' && (
          <>
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-neon-blue/20 animate-neon-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
              ))}
            </div>
            <span className="relative z-10 font-mono tracking-wider text-neon-blue animate-neon-flicker">TEAM BANNER</span>
          </>
        )}
        {effect !== 'cyber-grid' && 'TEAM BANNER'}
        {effect === 'sparkle' && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
            <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
          </div>
        )}
        {effect === 'flame-wave' && (
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50 animate-pulse-slow"></div>
        )}
        {effect === 'neon-pulse' && (
          <div className="absolute inset-0 border border-neon-blue shadow-neon-blue animate-neon-breathe pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default BannerEffectPreview;