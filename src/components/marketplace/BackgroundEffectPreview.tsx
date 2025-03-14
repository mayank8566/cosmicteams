'use client';

interface BackgroundEffectPreviewProps {
  effect: string;
}

const BackgroundEffectPreview = ({ effect }: BackgroundEffectPreviewProps) => {
  return (
    <div className="w-full h-12 relative overflow-hidden rounded-md">
      <div className={`
        w-full h-full flex items-center justify-center text-xs text-white p-1
        ${effect === 'nebula' ? 'bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 opacity-80' : ''}
        ${effect === 'aurora' ? 'bg-gradient-to-r from-green-400 to-blue-500 animate-pulse-slow opacity-70' : ''}
        ${effect === 'space' ? 'bg-black cosmic-stars' : ''}
        ${effect === 'galaxy' ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-size-200 animate-gradient-x opacity-70' : ''}
      `}>
        BACKGROUND
      </div>
    </div>
  );
};

export default BackgroundEffectPreview;