import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -2 } : {}}
      className={`
        bg-white rounded-xl shadow-sm border border-gray-200 p-6
        transition-all duration-200
        ${hover ? 'hover:shadow-lg' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};