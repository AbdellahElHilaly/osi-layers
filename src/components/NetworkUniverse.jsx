import React from 'react';
import { Icon } from '@iconify/react';

const NetworkUniverse = ({ onReturn }) => {
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
      <div className="fixed top-6 left-6 z-40 bg-orange-900/30 backdrop-blur-sm rounded-xl p-4 border border-orange-400/30">
        <div className="flex items-center mb-2">
          <Icon icon="fluent-mdl2:network-tower" className="text-2xl text-orange-400 mr-3" />
          <h3 className="text-lg font-bold text-orange-300">Network Layer (L3)</h3>
        </div>
        <p className="text-sm text-gray-300">IP Packets • Routing • Addressing</p>
      </div>

      <div className="relative z-10 min-h-full w-full flex flex-col items-center justify-start overflow-auto pt-32 pb-24 px-4 gap-6 md:flex-row md:justify-center md:pt-24 md:pb-12 md:gap-8">

        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full max-w-sm shrink-0 items-center md:max-w-none md:flex-1 md:gap-8 md:min-w-[280px]">
          {/* IP Packet Structure */}
          <div className="bg-orange-900/40 backdrop-blur-sm rounded-lg p-4 border border-orange-400/30 w-full md:max-w-sm">
            <h4 className="text-sm text-orange-300 mb-3 text-center">IPv4 Packet Header</h4>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-orange-600 p-2 rounded text-xs text-center">
                <div className="font-bold">VER</div>
                <div className="text-xs opacity-80">4</div>
              </div>
              <div className="bg-orange-500 p-2 rounded text-xs text-center">
                <div className="font-bold">TTL</div>
                <div className="text-xs opacity-80">64</div>
              </div>
              <div className="bg-orange-600 p-2 rounded text-xs text-center">
                <div className="font-bold">PROTO</div>
                <div className="text-xs opacity-80">TCP</div>
              </div>
              <div className="bg-orange-500 p-2 rounded text-xs text-center">
                <div className="font-bold">CSUM</div>
                <div className="text-xs opacity-80">0x1A2B</div>
              </div>
            </div>
          </div>

          {/* IP Addresses */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-orange-400/30 w-full md:max-w-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <Icon icon="mdi:laptop" className="text-3xl text-orange-400 mb-2 mx-auto" />
                <div className="text-xs md:text-sm text-orange-300 font-mono break-all">192.168.1.100</div>
                <div className="text-[10px] md:text-xs text-gray-400">Source IP</div>
              </div>
              <div className="text-center">
                <Icon icon="mdi:server-network" className="text-3xl text-orange-400 mb-2 mx-auto" />
                <div className="text-xs md:text-sm text-orange-300 font-mono break-all">10.0.0.50</div>
                <div className="text-[10px] md:text-xs text-gray-400">Destination IP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 w-full max-w-sm shrink-0 items-center md:max-w-none md:flex-1 md:gap-8 md:min-w-[280px]">
          {/* Routing Table */}
          <div className="bg-green-900/40 backdrop-blur-sm rounded-lg p-4 border border-green-400/30 w-full md:max-w-sm relative z-20">
            <div className="flex items-center mb-2">
              <Icon icon="mdi:routes" className="text-green-400 text-xl mr-2" />
              <div className="text-sm text-green-300 font-bold">Routing</div>
            </div>
            <div className="text-xs text-gray-400 space-y-2 font-mono">
              <div>0.0.0.0/0 &rarr; Gateway</div>
              <div>192.168.1.0/24 &rarr; Local</div>
            </div>
          </div>

          {/* Subnet Mask */}
          <div className="bg-purple-900/40 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 w-full md:max-w-sm relative z-20">
            <div className="text-center">
              <Icon icon="mdi:network" className="text-purple-400 text-2xl mb-1 mx-auto" />
              <div className="text-sm text-purple-300 mb-1">Subnet Mask</div>
              <div className="text-sm text-gray-300 font-mono bg-black/30 py-1 px-2 rounded inline-block">255.255.255.0</div>
            </div>
          </div>
        </div>

        {/* Flowing Packets - Keep absolute but constrain to center */}
        <div className="absolute inset-x-0 h-40 pointer-events-none overflow-hidden block z-0 top-[40%] md:top-1/2 md:-translate-y-1/2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-packet-flow"
              style={{
                left: `${10 + i * 15}%`,
                top: `${50 + Math.sin(i * 0.5) * 20}%`,
                animationDelay: `${i * 1.5}s`
              }}
            >
              <div className="w-14 h-6 md:w-16 md:h-8 bg-gradient-to-r from-orange-500/80 to-orange-600/80 rounded border-orange-400/50 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold shadow-lg border">
                Packet
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NetworkUniverse;