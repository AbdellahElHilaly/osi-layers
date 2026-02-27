import React from 'react';
import { Icon } from '@iconify/react';

const ApplicationUniverse = ({ onReturn }) => {
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
      <div className="fixed top-6 left-6 z-40 bg-pink-900/30 backdrop-blur-sm rounded-xl p-4 border border-pink-400/30">
        <div className="flex items-center mb-2">
          <Icon icon="eos-icons:application" className="text-2xl text-pink-400 mr-3" />
          <h3 className="text-lg font-bold text-pink-300">Application Layer (L7)</h3>
        </div>
        <p className="text-sm text-gray-300">User Interface • Applications • Services</p>
      </div>
      
      {/* Data Visualization */}
      <div className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden">
        
        {/* Application Grid */}
        <div className="grid grid-cols-3 gap-8 absolute top-1/4 left-1/2 transform -translate-x-1/2">
          <div className="bg-pink-900/40 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30 text-center">
            <Icon icon="mdi:web" className="text-4xl text-pink-400 mb-2 mx-auto" />
            <div className="text-sm font-bold text-pink-300">HTTP/HTTPS</div>
            <div className="text-xs text-gray-400">Web Browsing</div>
          </div>
          
          <div className="bg-pink-900/40 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30 text-center">
            <Icon icon="mdi:email" className="text-4xl text-pink-400 mb-2 mx-auto" />
            <div className="text-sm font-bold text-pink-300">SMTP/POP3</div>
            <div className="text-xs text-gray-400">Email</div>
          </div>
          
          <div className="bg-pink-900/40 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30 text-center">
            <Icon icon="mdi:file-transfer" className="text-4xl text-pink-400 mb-2 mx-auto" />
            <div className="text-sm font-bold text-pink-300">FTP/SFTP</div>
            <div className="text-xs text-gray-400">File Transfer</div>
          </div>
          
          <div className="bg-pink-900/40 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30 text-center">
            <Icon icon="mdi:dns" className="text-4xl text-pink-400 mb-2 mx-auto" />
            <div className="text-sm font-bold text-pink-300">DNS</div>
            <div className="text-xs text-gray-400">Name Resolution</div>
          </div>
          
          <div className="bg-pink-900/40 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30 text-center">
            <Icon icon="mdi:remote-desktop" className="text-4xl text-pink-400 mb-2 mx-auto" />
            <div className="text-sm font-bold text-pink-300">SSH/Telnet</div>
            <div className="text-xs text-gray-400">Remote Access</div>
          </div>
          
          <div className="bg-pink-900/40 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30 text-center">
            <Icon icon="mdi:database" className="text-4xl text-pink-400 mb-2 mx-auto" />
            <div className="text-sm font-bold text-pink-300">SQL/NoSQL</div>
            <div className="text-xs text-gray-400">Database</div>
          </div>
        </div>

        {/* User Interface */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-pink-400/30">
            <div className="text-center">
              <Icon icon="mdi:monitor" className="text-5xl text-pink-400 mb-3 mx-auto" />
              <h4 className="text-lg font-bold text-pink-300 mb-2">User Interface</h4>
              <p className="text-sm text-gray-400">Direct interaction with end users</p>
            </div>
          </div>
        </div>

        {/* API Communication */}
        <div className="absolute right-20 top-1/3">
          <div className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
            <div className="text-center">
              <Icon icon="mdi:api" className="text-blue-400 text-3xl mb-2 mx-auto" />
              <div className="text-sm text-blue-300 font-bold">REST API</div>
              <div className="text-xs text-gray-400">JSON/XML</div>
            </div>
          </div>
        </div>

        {/* Real-time Services */}
        <div className="absolute left-20 top-1/3">
          <div className="bg-green-900/40 backdrop-blur-sm rounded-lg p-4 border border-green-400/30">
            <div className="text-center">
              <Icon icon="mdi:message-fast" className="text-green-400 text-3xl mb-2 mx-auto animate-pulse" />
              <div className="text-sm text-green-300 font-bold">WebSocket</div>
              <div className="text-xs text-gray-400">Real-time</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApplicationUniverse;