'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  label = 'Learn More',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative bg-transparent cursor-pointer text-white px-8 sm:px-10 md:px-12 py-3 md:py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-in-out w-fit text-base md:text-lg font-semibold overflow-hidden group ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      whileHover={disabled ? {} : {
        scale: 1.1,
        rotate: [0, -2, 2, -2, 0],
        boxShadow: '0px 10px 30px rgba(255, 255, 255, 0.3)',
      }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient border effect */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent p-[2px] opacity-100 transition-opacity duration-300 ${disabled ? 'opacity-30' : 'group-hover:opacity-0'}`}>
        <div className="w-full h-full rounded-full bg-black"></div>
      </div>

      {/* Animated background on hover */}
      <div className={`absolute inset-0 rounded-full bg-white scale-0 transition-transform duration-500 ease-out ${disabled ? '' : 'group-hover:scale-100'}`}></div>

      {/* Ripple effect */}
      <div className={`absolute inset-0 rounded-full bg-white opacity-0 ${disabled ? '' : 'group-hover:opacity-20 group-hover:animate-ping'}`}></div>

      {/* Text */}
      <span className="relative z-10 transition-colors duration-300">{label}</span>
    </motion.button>
  );
};

export default AnimatedButton;
