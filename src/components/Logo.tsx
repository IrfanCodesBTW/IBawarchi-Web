/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { OptimizedImage } from './OptimizedImage';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'icon' | 'full' | 'horizontal';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'full' }) => {
  // Determine sizing and asset path based on variant and size props
  let imgClass = '';
  let imgSrc = '';
  
  if (variant === 'icon') {
     imgSrc = '/logo-vertical.png'; // Fallback to vertical logo icon
     imgClass = size === 'sm' ? 'w-10 h-10' : size === 'md' ? 'w-16 h-16' : size === 'lg' ? 'w-24 h-24' : 'w-36 h-36';
     imgClass += ' object-contain';
  } else if (variant === 'horizontal') {
     // Horizontal sits in the navbar
     imgSrc = '/logo-horizontal.png';
     imgClass = size === 'sm' ? 'h-10 md:h-12' : size === 'md' ? 'h-14 md:h-16' : 'h-20';
     imgClass += ' object-contain py-0.5';
  } else {
     // Full layout for footers and large displays
     imgSrc = '/logo-vertical.png';
     imgClass = size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : size === 'lg' ? 'h-52' : 'h-72';
     imgClass += ' object-contain';
  }

  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <OptimizedImage 
        src={imgSrc} 
        alt="Bawarchi Logo" 
        className={imgClass}
        priority={true}
      />
    </div>
  );
};
