'use client';

import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

export type IconName = 'google' | 'cart' | 'wishlist' | 'arrowleft' | 'arrowright' | 'phone' | 'twitter'

export interface IconProps {
  name?: IconName | string;
  type?: 'regular' | 'solid' | 'duotone' | 'svg';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  width?: number;
  height?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  type = 'solid',
  size = 'lg',
  name,
  width,
  height,
  className,
}) => {
  const sizeToDimensions = {
    sm: {width: 24, height: 24},
    md: {width: 32, height: 32},
    lg: {width: 40, height: 40},
    xl: {width: 60, height: 60},

  }

  if ( !width && !height ) {
    const dimensions = sizeToDimensions[size];
    if (dimensions) {
      width = dimensions.width;
      height = dimensions.height;
    }
  }
  if (!name) return null;
  return type === 'svg' ? (
    <Image
      src={`/icons/${name}.svg`}
      alt={name}
      width={width}
      height={height}
      priority
      className={clsx('text-gray-700',  className)}
    />
  ) : (
    <span 
      className={
        clsx(`fa-${!name ? 'user' : name} fa-${type}`,
        clsx('text-gray-700', className)
      )
    }></span>
  )
}