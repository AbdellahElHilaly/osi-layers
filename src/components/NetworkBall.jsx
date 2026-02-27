import React from 'react';
import { Icon } from '@iconify/react';
import SmallBall from './SmallBall';

const NetworkBall = ({ className, onClick, small = false }) => {
  if (small) {
    return (
      <SmallBall
        className={className}
        onClick={onClick}
        icon="fluent-mdl2:network-tower"
        color="orange"
        position={{ left: '75%', top: '45%' }}
        size="w-16 h-16"
      />
    );
  }

  return (
    <div className={`absolute ${className}`} style={{ left: '60%', top: '40%' }}>
      <div 
        className="relative w-80 h-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-float cursor-pointer shadow-2xl"
        style={{ boxShadow: '0 0 40px rgba(251, 146, 60, 0.4)' }}
        onClick={onClick}
      >
        {/* Ball glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-transparent blur-xl"></div>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Icon icon="fluent-mdl2:network-tower" className="text-6xl text-white mb-4 animate-icon-float" />
            <h3 className="text-2xl font-bold mb-2">Network Layer</h3>
            <p className="text-sm opacity-80">Layer 3 • IP Routing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkBall;