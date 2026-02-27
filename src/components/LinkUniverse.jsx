import React from 'react';
import { Icon } from '@iconify/react';

const LinkUniverse = ({ onReturn }) => {
  return (
    <div className="space-bg h-screen w-screen font-sans text-white overflow-hidden fixed inset-0">
      {/* Exit Button */}
      <button 
        onClick={onReturn}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
      >
        <Icon icon="mdi:close" className="text-2xl text-white" />
      </button>

      {/* Layer Info */}
      <div className="fixed top-6 left-6 z-40 bg-cyan-900/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30">
        <div className="flex items-center mb-2">
          <Icon icon="mingcute:link-fill" className="text-2xl text-cyan-400 mr-3" />
          <h3 className="text-lg font-bold text-cyan-300">Data Link Layer (L2)</h3>
        </div>
        <p className="text-sm text-gray-300">Frames • MAC Address • Error Control</p>
      </div>
      
      {/* Data Visualization */}
      <div className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden">
        
        {/* Frame Structure */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
          <div className="bg-cyan-900/40 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 animate-pulse-slow">
            <h4 className="text-sm text-cyan-300 mb-3 text-center">Ethernet Frame</h4>
            <div className="flex space-x-2">
              <div className="bg-cyan-600 p-2 rounded text-xs text-center min-w-16">
                <div className="font-bold">SRC</div>
                <div className="text-xs opacity-80">MAC</div>
              </div>
              <div className="bg-cyan-500 p-2 rounded text-xs text-center min-w-16">
                <div className="font-bold">DST</div>
                <div className="text-xs opacity-80">MAC</div>
              </div>
              <div className="bg-cyan-400 text-black p-2 rounded text-xs text-center min-w-20">
                <div className="font-bold">DATA</div>
                <div className="text-xs opacity-80">Payload</div>
              </div>
              <div className="bg-cyan-600 p-2 rounded text-xs text-center min-w-12">
                <div className="font-bold">FCS</div>
                <div className="text-xs opacity-80">CRC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Flowing Frames */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-frame-flow"
            style={{
              left: `${5 + i * 20}%`,
              top: `${60 + Math.sin(i * 0.5) * 5}%`,
              animationDelay: `${i * 1.6}s`
            }}
          >
            <div className="w-12 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-xs font-bold shadow-lg border border-cyan-400">
              Frame
            </div>
          </div>
        ))}

        {/* MAC Address Display */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <Icon icon="mdi:laptop" className="text-2xl text-cyan-400 mb-2 mx-auto" />
                <div className="text-xs text-cyan-300 font-mono">AA:BB:CC:11:22:33</div>
                <div className="text-xs text-gray-400">Source MAC</div>
              </div>
              <div className="text-center">
                <Icon icon="mdi:router-wireless" className="text-2xl text-cyan-400 mb-2 mx-auto" />
                <div className="text-xs text-cyan-300 font-mono">DD:EE:FF:44:55:66</div>
                <div className="text-xs text-gray-400">Destination MAC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Detection */}
        <div className="absolute top-20 right-20">
          <div className="bg-green-900/40 backdrop-blur-sm rounded-lg p-3 border border-green-400/30 animate-pulse">
            <div className="flex items-center">
              <Icon icon="mdi:check-circle" className="text-green-400 text-xl mr-2" />
              <div>
                <div className="text-sm text-green-300 font-bold">CRC OK</div>
                <div className="text-xs text-gray-400">No Errors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Control */}
        <div className="absolute bottom-20 right-20">
          <div className="bg-yellow-900/40 backdrop-blur-sm rounded-lg p-3 border border-yellow-400/30">
            <div className="text-center">
              <Icon icon="mdi:traffic-light" className="text-yellow-400 text-2xl mb-1 mx-auto animate-pulse" />
              <div className="text-sm text-yellow-300">Flow Control</div>
              <div className="text-xs text-gray-400">Rate Limiting</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LinkUniverse;