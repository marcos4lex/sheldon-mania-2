import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = "font-montserrat font-bold uppercase transition-all duration-200 flex items-center justify-center";

  const variants = {
    primary: "bg-[#1F4C6B] hover:bg-[#1E6A8F] text-white rounded-lg shadow-lg border border-[#4FB3FF]/30",
    secondary: "bg-transparent border-2 border-[#1F4C6B] text-[#4FB3FF] hover:bg-[#1F4C6B]/20 rounded-lg",
    icon: "bg-[#1F4C6B] text-white rounded-full border-4 border-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "w-20 h-20 text-4xl md:w-28 md:h-28 md:text-5xl", // Specific for the game icon buttons
  };

  const selectedSize = variant === 'icon' ? sizes.lg : (size === 'lg' ? "px-8 py-4 text-xl" : sizes[size]);

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${selectedSize} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
