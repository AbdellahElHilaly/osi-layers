import React from 'react';
import { Icon } from '@iconify/react';

const SmallBall = ({ 
  className, 
  onClick, 
  icon, 
  color = 'blue', 
  position = { left: '50%', top: '50%' },
  size = 'w-16 h-16',
  animationDelay = '0s'
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    cyan: 'from-cyan-500 to-cyan-600', 
    orange: 'from-orange-500 to-orange-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    yellow: 'from-yellow-500 to-yellow-600'
  };

  const shadowColors = {
    blue: '59, 130, 246',
    cyan: '6, 182, 212',
    orange: '245, 158, 11', 
    green: '34, 197, 94',
    red: '239, 68, 68',
    purple: '168, 85, 247',
    pink: '236, 72, 153',
    yellow: '234, 179, 8'
  };

  return (
    <div 
      className={`absolute ${className}`} 
      style={{ 
        left: position.left, 
        right: position.right,
        top: position.top,
        animationDelay: animationDelay
      }}
    >
      <div 
        className={`relative ${size} bg-gradient-to-br ${colorClasses[color]} rounded-full animate-float cursor-pointer shadow-lg hover:scale-110 transition-transform`}
        style={{ boxShadow: `0 0 20px rgba(${shadowColors[color]}, 0.4)` }}
        onClick={onClick}
      >
        {/* Ball glow effect */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colorClasses[color].split(' ')[0]}/20 to-transparent blur-sm`}></div>
        
        {/* Center content - icon only */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon icon={icon} className="text-2xl text-white animate-icon-float" />
        </div>
      </div>
    </div>
  );
};

export default SmallBall;