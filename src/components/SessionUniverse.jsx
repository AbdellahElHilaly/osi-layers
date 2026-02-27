import React from 'react';
import { Icon } from '@iconify/react';

const SessionUniverse = ({ onReturn }) => {
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
      <div className="fixed top-6 left-6 z-40 bg-yellow-900/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30">
        <div className="flex items-center mb-2">
          <Icon icon="material-symbols:settings-ethernet" className="text-2xl text-yellow-400 mr-3" />
          <h3 className="text-lg font-bold text-yellow-300">Session Layer (L5)</h3>
        </div>
        <p className="text-sm text-gray-300">Sessions • Authentication • Management</p>
      </div>
      
      {/* Data Visualization */}
      <div className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden">
        
        {/* Session Management */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
          <div className="bg-yellow-900/40 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30">
            <h4 className="text-lg text-yellow-300 mb-4 text-center">Session Management</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Icon icon="mdi:login" className="text-3xl text-yellow-400 mb-2 mx-auto" />
                <div className="text-sm font-bold">Establish</div>
              </div>
              <div className="text-center">
                <Icon icon="mdi:account-check" className="text-3xl text-yellow-400 mb-2 mx-auto" />
                <div className="text-sm font-bold">Maintain</div>
              </div>
              <div className="text-center">
                <Icon icon="mdi:logout" className="text-3xl text-yellow-400 mb-2 mx-auto" />
                <div className="text-sm font-bold">Terminate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30">
            <h5 className="text-sm text-yellow-300 mb-3 text-center">Active Sessions</h5>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-yellow-800/30 p-2 rounded">
                <Icon icon="mdi:account" className="text-yellow-400" />
                <span className="text-xs">User: Alice</span>
                <span className="text-xs text-green-400">Active</span>
              </div>
              <div className="flex items-center justify-between bg-yellow-800/30 p-2 rounded">
                <Icon icon="mdi:account" className="text-yellow-400" />
                <span className="text-xs">User: Bob</span>
                <span className="text-xs text-green-400">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Authentication */}
        <div className="absolute top-20 right-20">
          <div className="bg-green-900/40 backdrop-blur-sm rounded-lg p-3 border border-green-400/30">
            <div className="text-center">
              <Icon icon="mdi:shield-account" className="text-green-400 text-2xl mb-1 mx-auto" />
              <div className="text-sm text-green-300">Authenticated</div>
              <div className="text-xs text-gray-400">Token Valid</div>
            </div>
          </div>
        </div>

        {/* Checkpointing */}
        <div className="absolute bottom-20 right-20">
          <div className="bg-purple-900/40 backdrop-blur-sm rounded-lg p-3 border border-purple-400/30">
            <div className="text-center">
              <Icon icon="mdi:content-save" className="text-purple-400 text-2xl mb-1 mx-auto animate-pulse" />
              <div className="text-sm text-purple-300">Checkpoint</div>
              <div className="text-xs text-gray-400">Auto Save</div>
            </div>
          </div>
        </div>

        {/* Dialog Control */}
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
          <div className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30">
            <div className="text-center">
              <Icon icon="mdi:message-processing" className="text-blue-400 text-2xl mb-1 mx-auto" />
              <div className="text-sm text-blue-300">Dialog Control</div>
              <div className="text-xs text-gray-400">Full Duplex</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SessionUniverse;