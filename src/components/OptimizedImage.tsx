'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loadingStrategy?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
}

/**
 * OptimizedImage component for better performance across the application
 * This component handles image loading optimization with blur placeholder,
 * priority loading for above-the-fold images, and proper error handling
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 100,
  height = 100,
  className = '',
  priority = false,
  loadingStrategy = 'lazy',
  objectFit = 'cover',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Handle errors and loading state
  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  // Generate placeholder shimmer effect
  const shimmer = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="${width}" height="${height}" fill="#1e293b" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
      <defs>
        <linearGradient id="g">
          <stop stop-color="#1e293b" offset="0%" />
          <stop stop-color="#334155" offset="50%" />
          <stop stop-color="#1e293b" offset="100%" />
        </linearGradient>
      </defs>
    </svg>`;

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  // Create blur data URL
  const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer)}`;

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
      )}
      
      {!error ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          priority={priority}
          loading={loadingStrategy}
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{
            objectFit,
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.2s ease-in-out',
          }}
          className="w-full h-full"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-300 text-sm">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
