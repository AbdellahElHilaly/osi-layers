import React from 'react';
import { Icon } from '@iconify/react';

const PresentationUniverse = ({ onReturn }) => {
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
          <Icon icon="streamline-ultimate-color:presentation-projector" className="text-2xl text-purple-400 mr-3" />
          <h3 className="text-lg font-bold text-purple-300">Presentation Layer (L6)</h3>
        </div>
        <p className="text-sm text-gray-300">Encryption • Compression • Translation</p>
      </div>
      
      {/* Data Visualization */}
      <div className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden">
        
        {/* Encryption Process */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
          <div className="bg-purple-900/40 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
            <h4 className="text-lg text-purple-300 mb-4 text-center">Data Transformation</h4>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="bg-gray-600 p-3 rounded text-sm">Plain Text</div>
                <div className="text-xs text-gray-400 mt-1">Raw Data</div>
              </div>
              <Icon icon="mdi:arrow-right" className="text-purple-400 text-2xl" />
              <div className="text-center">
                <div className="bg-purple-600 p-3 rounded text-sm font-mono">Encrypted</div>
                <div className="text-xs text-gray-400 mt-1">AES-256</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compression */}
        <div className="absolute bottom-32 left-1/4">
          <div className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
            <div className="text-center">
              <Icon icon="mdi:zip-box" className="text-blue-400 text-3xl mb-2 mx-auto" />
              <div className="text-sm text-blue-300 font-bold">Compression</div>
              <div className="text-xs text-gray-400">GZIP • 50% Reduction</div>
            </div>
          </div>
        </div>

        {/* Character Encoding */}
        <div className="absolute bottom-32 right-1/4">
          <div className="bg-green-900/40 backdrop-blur-sm rounded-lg p-4 border border-green-400/30">
            <div className="text-center">
              <Icon icon="mdi:translate" className="text-green-400 text-3xl mb-2 mx-auto" />
              <div className="text-sm text-green-300 font-bold">Encoding</div>
              <div className="text-xs text-gray-400">UTF-8 • Unicode</div>
            </div>
          </div>
        </div>

        {/* SSL/TLS Certificate */}
        <div className="absolute top-20 right-20">
          <div className="bg-green-900/40 backdrop-blur-sm rounded-lg p-3 border border-green-400/30">
            <div className="flex items-center">
              <Icon icon="mdi:certificate" className="text-green-400 text-xl mr-2" />
              <div>
                <div className="text-sm text-green-300 font-bold">SSL Certificate</div>
                <div className="text-xs text-gray-400">Valid • Trusted CA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Format */}
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
          <div className="bg-yellow-900/40 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30">
            <div className="space-y-2">
              <div className="text-center">
                <Icon icon="mdi:code-json" className="text-yellow-400 text-2xl" />
                <div className="text-xs text-yellow-300">JSON</div>
              </div>
              <div className="text-center">
                <Icon icon="mdi:file-xml" className="text-yellow-400 text-2xl" />
                <div className="text-xs text-yellow-300">XML</div>
              </div>
              <div className="text-center">
                <Icon icon="mdi:image" className="text-yellow-400 text-2xl" />
                <div className="text-xs text-yellow-300">Images</div>
              </div>
            </div>
          </div>
        </div>

        {/* Flowing Encrypted Data */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-crypto-flow"
            style={{
              left: `${20 + i * 25}%`,
              top: `${55 + Math.sin(i * 0.6) * 10}%`,
              animationDelay: `${i * 4.5}s`
            }}
          >
            <div className="w-24 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-xs font-bold shadow-lg border border-purple-400">
              🔒 Encrypted
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default PresentationUniverse;