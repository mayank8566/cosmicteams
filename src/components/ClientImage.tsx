'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

// This component only renders the Image component on the client
// to avoid hydration mismatches caused by browser extensions that modify DOM
export default function ClientImage({
  src,
  alt,
  fallbackSrc = '/images/default-avatar.svg',
  ...props
}: ImageProps & { fallbackSrc?: string }) {
  const [isClient, setIsClient] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | undefined | null>(src);
  const [imgError, setImgError] = useState(false);

  // Set isClient to true on mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update imgSrc if src changes
  useEffect(() => {
    if (src) {
      setImgSrc(src);
      setImgError(false);
    }
  }, [src]);

  // Handle image load error
  const handleError = () => {
    setImgError(true);
    setImgSrc(fallbackSrc);
  };

  // Ensure null/undefined src values are handled properly
  if (!imgSrc && !imgError) {
    if (isClient) {
      // Only change state on client
      setImgError(true);
      setImgSrc(fallbackSrc);
    } else {
      // Return placeholder for SSR
      return (
        <div 
          className={`bg-space-blue/50 ${props.className || ''}`}
          style={{ 
            width: props.width || '100%', 
            height: props.height || '100%' 
          }}
          aria-label={alt || "Image placeholder"}
        />
      );
    }
  }

  // If not client, render an empty div with same dimensions
  if (!isClient) {
    return (
      <div 
        className={`bg-space-blue/50 ${props.className || ''}`}
        style={{ 
          width: props.width || '100%', 
          height: props.height || '100%' 
        }}
        aria-label={alt || "Image placeholder"}
        data-ssr-placeholder="true"
      />
    );
  }

  // On client, render the Image component
  return (
    <Image
      {...props}
      src={imgSrc || fallbackSrc}
      alt={alt}
      onError={handleError}
      unoptimized
      data-client-image="true"
    />
  );
} 