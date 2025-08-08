'use client';
import React from 'react';
import Image from 'next/image';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
  leftImage?: {
    src: string;
    width: number;
    height: number;
  };
  rightImage?: {
    src: string;
    width: number;
    height: number;
  };
}

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  leftImage,
  rightImage,
  ...props
}) => {
  const variants = {
    primary: 'bg-global-3 text-global-4 hover:bg-global-4 active:bg-global-2 focus:ring-global-5',
    secondary: 'bg-global-2 text-global-4 hover:bg-global-3 active:bg-global-4 focus:ring-global-3',
    gradient: 'bg-[linear-gradient(270deg,#186ef2_0%,_#6d18ef_100%)] text-global-4 hover:opacity-90 active:opacity-80 focus:ring-global-5',
    outline: 'border border-global-4 text-global-4 bg-transparent hover:bg-global-5 active:bg-global-3 focus:ring-global-5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base',
    md: 'px-4 py-3 text-base sm:px-6 sm:py-4 sm:text-lg',
    lg: 'px-6 py-4 text-lg sm:px-8 sm:py-5 sm:text-xl'
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        rounded-[5px]
        transition-all 
        duration-200 
        ease-in-out
        focus:outline-none 
        focus:ring-2
        focus:ring-opacity-50
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'} 
        font-semibold
        inline-flex
        items-center
        justify-center
        gap-[10px]
        min-h-[44px] sm:min-h-[48px]
        touch-manipulation
        shadow-[0px_10px_60px_#00000019]
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      aria-disabled={disabled}
      {...props}
    >
      {leftImage && (
        <Image 
          src={leftImage.src} 
          alt="" 
          width={leftImage.width} 
          height={leftImage.height}
          className="flex-shrink-0"
        />
      )}
      <span>{children}</span>
      {rightImage && (
        <Image 
          src={rightImage.src} 
          alt="" 
          width={rightImage.width} 
          height={rightImage.height}
          className="flex-shrink-0"
        />
      )}
    </button>
  );
};

export default Button;