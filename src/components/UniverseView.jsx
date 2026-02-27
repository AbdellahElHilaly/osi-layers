import React from 'react';
import { Icon } from '@iconify/react';
import SmallBall from './SmallBall';

const UniverseView = ({ onReturn, onPhysicsClick, onLinkClick }) => {
  return (
    <div className="space-bg h-screen w-screen font-sans text-white overflow-hidden fixed inset-0">
      {/* Exit Button */}
      <button 
        onClick={onReturn}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
      >
        <Icon icon="mdi:close" className="text-2xl text-white" />
      </button>

      {/* Switch Info */}
      <div className="fixed top-6 left-6 z-40 bg-red-900/30 backdrop-blur-sm rounded-xl p-4 border border-red-400/30">
        <div className="flex items-center mb-2">
          <Icon icon="mdi:switch" className="text-2xl text-red-400 mr-3" />
          <h3 className="text-lg font-bold text-red-300">Switch Universe</h3>
        </div>
        <p className="text-sm text-gray-300">Layers 1-2 • Physical to Data Link</p>
      </div>
      
      {/* Universe Container */}
      <div className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden">
        
        {/* Layer 1 - Physical */}
        <SmallBall
          className="animate-universe-swim"
          onClick={onPhysicsClick}
          icon="hugeicons:physics"
          color="purple"
          position={{ left: '30%', top: '40%' }}
        />
        
        {/* Layer 2 - Data Link */}
        <SmallBall
          className="animate-universe-swim-alt"
          onClick={onLinkClick}
          icon="mingcute:link-fill"
          color="cyan"
          position={{ right: '30%', top: '50%' }}
        />
        
      </div>
    </div>
  );
};

export default UniverseView;