import React from 'react';
import { Icon } from '@iconify/react';

const HostBall = ({ isExploding, onClick }) => {
  return (
    <div 
      className={`network-ball absolute animate-swim cursor-pointer ${isExploding ? 'fade-out' : ''}`}
      style={{ left: '10%', top: '20%' }}
      onClick={onClick}
    >
      <div 
        className={`relative w-80 h-80 bg-gradient-to-br from-green-500 to-green-600 rounded-full animate-float animate-pulse-glow shadow-2xl ${isExploding ? 'animate-explosion' : ''}`}
      >
        {/* Ball glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 to-transparent blur-xl"></div>
        
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Host</h3>
            <p className="text-sm opacity-80">End User Devices</p>
          </div>
        </div>
        
        {/* Layer 7 - Application */}
        <div 
          className="absolute top-12 left-1/2 transform -translate-x-1/2 animate-icon-float"
          id="applicationBall"
        >
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="eos-icons:application" 
              className="text-lg text-white" 
            />
          </div>
        </div>
        
        {/* Layer 6 - Presentation */}
        <div 
          className="absolute top-20 right-12 animate-icon-float"
          style={{ animationDelay: '-0.5s' }}
          id="presentationBall"
        >
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="streamline-ultimate-color:presentation-projector" 
              className="text-lg text-white" 
            />
          </div>
        </div>
        
        {/* Layer 5 - Session */}
        <div 
          className="absolute right-12 top-1/2 transform -translate-y-1/2 animate-icon-float"
          style={{ animationDelay: '-1s' }}
          id="sessionBall"
        >
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="material-symbols:settings-ethernet" 
              className="text-lg text-white" 
            />
          </div>
        </div>
        
        {/* Layer 4 - Transport */}
        <div 
          className="absolute bottom-20 right-12 animate-icon-float"
          style={{ animationDelay: '-1.5s' }}
          id="transportBall"
        >
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="lets-icons:transger" 
              className="text-lg text-white" 
            />
          </div>
        </div>

        {/* Layer 3 - Network */}
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-icon-float"
          style={{ animationDelay: '-2s' }}
          id="networkBall"
        >
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="fluent-mdl2:network-tower" 
              className="text-lg text-white" 
            />
          </div>
        </div>

        {/* Layer 2 - Data Link */}
        <div 
          className="absolute bottom-20 left-12 animate-icon-float"
          style={{ animationDelay: '-2.5s' }}
          id="linkBall"
        >
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="mingcute:link-fill" 
              className="text-lg text-white" 
            />
          </div>
        </div>

        {/* Layer 1 - Physical */}
        <div 
          className="absolute left-12 top-1/2 transform -translate-y-1/2 animate-icon-float"
          style={{ animationDelay: '-3s' }}
          id="physicsBall"
        >
          <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg">
            <Icon 
              icon="hugeicons:physics" 
              className="text-lg text-white" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostBall;