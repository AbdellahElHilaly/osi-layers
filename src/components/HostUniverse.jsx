import React from 'react';
import { Icon } from '@iconify/react';
import SmallBall from './SmallBall';

const HostUniverse = ({ 
  onReturn, 
  onPhysicsClick, 
  onLinkClick, 
  onNetworkClick,
  onTransportClick,
  onSessionClick,
  onPresentationClick,
  onApplicationClick
}) => {
  return (
    <div className="space-bg h-screen w-screen font-sans text-white overflow-hidden fixed inset-0">
      {/* Exit Button */}
      <button 
        onClick={onReturn}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
      >
        <Icon icon="mdi:close" className="text-2xl text-white" />
      </button>

      {/* OSI Model Info */}
      <div className="fixed top-6 left-6 z-40 bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30">
        <div className="flex items-center mb-2">
          <Icon icon="mdi:layers" className="text-2xl text-blue-400 mr-3" />
          <h3 className="text-lg font-bold text-blue-300">Host Universe</h3>
        </div>
        <p className="text-sm text-gray-300">All 7 OSI Layers</p>
      </div>

      {/* Universe Container */}
      <div className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden">
        
        {/* Layer 1 - Physical */}
        <SmallBall
          className="animate-universe-swim"
          onClick={onPhysicsClick}
          icon="hugeicons:physics"
          color="blue"
          position={{ left: '25%', top: '30%' }}
        />
        
        {/* Layer 2 - Data Link */}
        <SmallBall
          className="animate-universe-swim-alt"
          onClick={onLinkClick}
          icon="mingcute:link-fill"
          color="cyan"
          position={{ left: '70%', top: '65%' }}
        />
        
        {/* Layer 3 - Network */}
        <SmallBall
          className="animate-universe-swim"
          onClick={onNetworkClick}
          icon="fluent-mdl2:network-tower"
          color="orange"
          position={{ left: '60%', top: '40%' }}
        />
        
        {/* Layer 4 - Transport */}
        <SmallBall
          className="animate-universe-swim-alt"
          onClick={onTransportClick}
          icon="lets-icons:transger"
          color="green"
          position={{ left: '25%', top: '70%' }}
        />
        
        {/* Layer 5 - Session */}
        <SmallBall
          className="animate-universe-swim"
          onClick={onSessionClick}
          icon="material-symbols:settings-ethernet"
          color="yellow"
          position={{ left: '70%', top: '25%' }}
        />
        
        {/* Layer 6 - Presentation */}
        <SmallBall
          className="animate-universe-swim-alt"
          onClick={onPresentationClick}
          icon="streamline-ultimate-color:presentation-projector"
          color="purple"
          position={{ left: '45%', top: '80%' }}
        />
        
        {/* Layer 7 - Application */}
        <SmallBall
          className="animate-universe-swim"
          onClick={onApplicationClick}
          icon="eos-icons:application"
          color="pink"
          position={{ left: '75%', top: '60%' }}
        />
        
      </div>
    </div>
  );
};

export default HostUniverse;