import React from 'react';
import { Icon } from '@iconify/react';

const RouterBall = ({ isExploding, onClick }) => {
  return (
    <div 
      className={`network-ball absolute animate-swim-reverse cursor-pointer ${isExploding ? 'fade-out' : ''}`}
      style={{ right: '10%', top: '30%' }}
      onClick={onClick}
    >
      <div 
        className={`relative w-64 h-64 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full animate-float-reverse shadow-2xl ${isExploding ? 'animate-explosion' : ''}`}
        style={{ boxShadow: '0 0 40px rgba(245, 158, 11, 0.4)' }}
      >
        {/* Ball glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent blur-xl"></div>
        
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Router</h3>
            <p className="text-xs opacity-80">Network Routing</p>
          </div>
        </div>
        
        {/* Layer 1 - Physical */}
        <div 
          className="absolute top-6 left-1/2 transform -translate-x-1/2 animate-icon-float"
          id="physicsBall"
        >
          <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="hugeicons:physics" 
              className="text-2xl text-white" 
            />
          </div>
        </div>
        
        {/* Layer 2 - Data Link */}
        <div 
          className="absolute top-1/2 right-6 transform -translate-y-1/2 animate-icon-float"
          style={{ animationDelay: '-1s' }}
          id="linkBall"
        >
          <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="mingcute:link-fill" 
              className="text-2xl text-white" 
            />
          </div>
        </div>
        
        {/* Layer 3 - Network */}
        <div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-icon-float"
          style={{ animationDelay: '-2s' }}
          id="networkBall"
        >
          <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="fluent-mdl2:network-tower" 
              className="text-2xl text-white" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouterBall;