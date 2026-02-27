import React from 'react';
import { Icon } from '@iconify/react';

const SwitchBall = ({ onClick, isExploding }) => {
  return (
    <div 
      className={`network-ball absolute animate-swim-third cursor-pointer ${isExploding ? 'fade-out' : ''}`}
      style={{ left: '50%', top: '60%', transform: 'translateX(-50%)' }}
      onClick={onClick}
    >
      <div 
        className={`relative w-48 h-48 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-float shadow-2xl ${isExploding ? 'animate-explosion' : ''}`}
        style={{ boxShadow: '0 0 40px rgba(239, 68, 68, 0.4)' }}
      >
        {/* Ball glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-transparent blur-xl"></div>
        
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Switch</h3>
            <p className="text-xs opacity-80">Network Switching</p>
          </div>
        </div>
        
        {/* Layer 1 - Physical */}
        <div 
          className="absolute top-4 left-1/2 transform -translate-x-1/2 animate-icon-float"
          id="physicsBall"
        >
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="hugeicons:physics" 
              className="text-lg text-white" 
            />
          </div>
        </div>
        
        {/* Layer 2 - Data Link */}
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-icon-float"
          style={{ animationDelay: '-1s' }}
          id="linkBall"
        >
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="mingcute:link-fill" 
              className="text-lg text-white" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchBall;