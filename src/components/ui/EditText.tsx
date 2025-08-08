'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  disabled?: boolean;
  className?: string;
  rightImage?: {
    src: string;
    width: number;
    height: number;
  };
  leftImage?: {
    src: string;
    width: number;
    height: number;
  };
}

const EditText: React.FC<EditTextProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ 
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  className = '',
  rightImage,
  leftImage,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`
      flex 
      items-center 
      gap-[16px] 
      w-full 
      bg-global-3
      border-b 
      border-solid 
      border-global-5
      px-2 sm:px-4 lg:px-[8px]
      py-3 sm:py-4 lg:py-[14px]
      mt-2 sm:mt-3 lg:mt-[10px]
      transition-all
      duration-200
      focus-within:border-global-4
      hover:bg-opacity-90
      ${className}
    `.trim().replace(/\s+/g, ' ')}>
      {leftImage && (
        <Image 
          src={leftImage.src} 
          alt="" 
          width={leftImage.width} 
          height={leftImage.height}
          className="flex-shrink-0"
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        className="
          flex-1
          bg-transparent
          text-global-4
          placeholder-global-4
          text-base sm:text-lg lg:text-[18px]
          font-jost
          font-semibold
          leading-[27px]
          outline-none
          border-none
          min-h-[44px] sm:min-h-[48px]
        "
        {...props}
      />
      {rightImage && (
        <Image 
          src={rightImage.src} 
          alt="" 
          width={rightImage.width} 
          height={rightImage.height}
          className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
        />
      )}
    </div>
  );
};

export default EditText;