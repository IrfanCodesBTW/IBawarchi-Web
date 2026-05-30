/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to construct optimized WebP asset paths
  const getOptimizedPaths = (originalSrc: string) => {
    if (!originalSrc) return { base: '', srcSet: '', blur: '' };

    // If it's already a WebP or external, return as is
    if (originalSrc.endsWith('.webp') || originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      return { base: originalSrc, srcSet: '', blur: '' };
    }

    // Handle logos in public root: e.g. /logo-vertical.png -> /images/optimized/logo-vertical.webp
    if (originalSrc.startsWith('/logo')) {
      const baseName = originalSrc.replace('.png', '');
      const base = `/images/optimized${baseName}.webp`;
      const blur = `/images/optimized${baseName}_blur.webp`;
      return {
        base,
        srcSet: '', // Logos don't need responsive variants
        blur
      };
    }

    // Handle standard images in public/images/
    // e.g. /images/dishes/chicken_biryani.png -> /images/optimized/dishes/chicken_biryani.webp
    if (originalSrc.startsWith('/images/')) {
      const cleanPath = originalSrc.replace('/images/', '/images/optimized/').replace('.png', '');
      const base = `${cleanPath}.webp`;
      const blur = `${cleanPath}_blur.webp`;
      
      // Construct srcSet with standard breakpoints: 480w, 768w, 1200w
      // (The python script only generates these if source image is wide enough,
      // but standard browser behavior will fallback gracefully if a source fails or isn't listed)
      const srcSet = `
        ${cleanPath}_480w.webp 480w,
        ${cleanPath}_768w.webp 768w,
        ${cleanPath}_1200w.webp 1200w,
        ${base} 1920w
      `.trim();

      return { base, srcSet, blur };
    }

    // Default fallback
    return { base: originalSrc, srcSet: '', blur: '' };
  };

  const { base, srcSet, blur } = getOptimizedPaths(src);

  // If priority is true, we preload this image dynamically (above-the-fold content optimization)
  useEffect(() => {
    if (priority && base) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = base;
      if (srcSet) {
        link.imageSrcset = srcSet;
        link.imageSizes = sizes;
      }
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, base, srcSet, sizes]);

  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* 1. Blur Placeholder (Tiny 20px image styled with CSS blur) */}
      {blur && !isLoaded && (
        <img
          src={blur}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110 pointer-events-none transition-opacity duration-500 ease-out"
          style={{ opacity: isLoaded ? 0 : 0.6 }}
        />
      )}

      {/* 2. Main Picture Element with Responsive WebP srcset */}
      <picture>
        {srcSet && <source srcSet={srcSet} sizes={sizes} type="image/webp" />}
        <img
          src={base}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-all duration-750 ease-out ${
            isLoaded 
              ? 'opacity-100 scale-100 filter blur-0' 
              : 'opacity-0 scale-[1.01] filter blur-sm'
          }`}
          {...props}
        />
      </picture>
    </div>
  );
};
