import React from 'react';
import { cn } from '../../lib/utils';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  status?: 'online' | 'offline' | 'busy' | 'away';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  initials,
  size = 'md',
  status,
  className,
}) => {
  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-16 w-16 text-xl',
  };
  
  const statusSizeClasses = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3 w-3',
    xl: 'h-3.5 w-3.5',
  };
  
  const statusColorClasses = {
    online: 'bg-status-online',
    offline: 'bg-status-offline',
    busy: 'bg-status-busy',
    away: 'bg-status-busy',
  };
  
  const statusPositionClasses = {
    xs: '-right-0.5 -bottom-0.5',
    sm: '-right-0.5 -bottom-0.5',
    md: '-right-0.5 -bottom-0.5',
    lg: 'right-0 bottom-0',
    xl: 'right-0 bottom-0',
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  return (
    <div className={cn('relative inline-block', className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn(
            'rounded-full object-cover',
            sizeClasses[size]
          )}
        />
      ) : (
        <div
          className={cn(
            'flex items-center justify-center rounded-full bg-primary-100 text-primary-800 font-medium',
            sizeClasses[size]
          )}
        >
          {initials || (alt ? getInitials(alt) : '??')}
        </div>
      )}
      
      {status && (
        <span
          className={cn(
            'absolute block rounded-full ring-2 ring-white',
            statusSizeClasses[size],
            statusPositionClasses[size],
            statusColorClasses[status] || 'bg-status-offline'
          )}
        />
      )}
    </div>
  );
};

export default Avatar;