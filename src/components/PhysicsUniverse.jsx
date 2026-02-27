import React from 'react';
import { Icon } from '@iconify/react';

const PhysicsUniverse = ({ onReturn }) => {
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
      <div className="fixed top-6 left-6 z-40 bg-purple-900/30 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30">
        <div className="flex items-center mb-2">
          <Icon icon="hugeicons:physics" className="text-2xl text-purple-400 mr-3" />
          <h3 className="text-lg font-bold text-purple-300">Physical Layer (L1)</h3>
        </div>
        <p className="text-sm text-gray-300">Electrical signals • Bits • Cables</p>
      </div>
      
      {/* Data Visualization */}
      <div className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden">
        
        {/* Cable Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-2 bg-gradient-to-r from-purple-600 to-purple-400 opacity-60">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse-slow"></div>
          </div>
        </div>

        {/* Flowing Bits */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bit-flow"
            style={{
              left: `${10 + i * 15}%`,
              top: `${45 + Math.sin(i) * 10}%`,
              animationDelay: `${i * 1}s`
            }}
          >
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          </div>
        ))}

        {/* Voltage Levels */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="w-4 h-8 bg-purple-500 rounded animate-pulse"></div>
                <span className="text-xs text-purple-300 block mt-1">+5V</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-purple-700 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-xs text-purple-300 block mt-1">0V</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-8 bg-purple-500 rounded animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-xs text-purple-300 block mt-1">+5V</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">Signal Transmission</p>
          </div>
        </div>

        {/* Connection Points */}
        <div className="absolute top-1/2 left-10 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-10 w-6 h-6 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

      </div>
    </div>
  );
};

export default PhysicsUniverse;