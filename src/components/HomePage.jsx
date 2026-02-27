import React, { useState, useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

const HomePage = ({ onLaunch }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      console.log('beforeinstallprompt event fired!');
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      console.log('App was installed successfully');
      setDeferredPrompt(null);
      setIsInstallable(false);
      setIsInstalled(true);
    };

    // Check if already in standalone mode (already installed)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsInstalled(isStandalone);

    if (!isStandalone) {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.addEventListener('appinstalled', handleAppInstalled);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    console.log('Install button clicked');

    if (!deferredPrompt) {
      console.log('No deferred prompt available');
      return;
    }

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      console.log('User choice:', outcome);

      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setIsInstalled(true);
      } else {
        console.log('User dismissed the install prompt');
      }

      setDeferredPrompt(null);
      setIsInstallable(false);
    } catch (error) {
      console.error('Error during installation:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-lg">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-4xl text-white font-bold shadow-lg">
            OSI
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            OSI Network Layers
          </h1>
          <p className="text-lg text-gray-300">
            Interactive visualization of network protocols and layers
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4 pt-8">
          {/* Launch Buttons */}
          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={() => onLaunch('osi')}
              className="w-full py-4 px-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              🚀 Launch OSI Layers
            </button>
            <button
              onClick={() => onLaunch('ip')}
              className="w-full py-4 px-8 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              🌐 Launch IP Classification
            </button>
          </div>

          {/* Install Button */}
          {deferredPrompt && !isInstalled && (
            <button
              onClick={handleInstallClick}
              className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📱 Install App on Phone
            </button>
          )}

          {/* Already Installed Message */}
          {isInstalled && (
            <div className="py-3 px-6 bg-green-500/20 border border-green-400 text-green-300 rounded-xl">
              ✅ App is installed and ready to use!
            </div>
          )}
        </div>

        {/* Features */}
        <div className="pt-8 space-y-3 text-gray-400">
          <div className="flex items-center justify-center space-x-2">
            <span>🌐</span>
            <span>Interactive Network Visualization</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span>📱</span>
            <span>Mobile & Desktop Friendly</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span>⚡</span>
            <span>Fast & Offline Ready</span>
          </div>
        </div>
      </div>

      {/* Service worker update notification */}
      {needRefresh && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            background: '#10b981',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
            zIndex: 9999,
            fontSize: '14px'
          }}
        >
          New content available!{' '}
          <button
            onClick={() => updateServiceWorker(true)}
            style={{
              marginLeft: '8px',
              background: 'white',
              color: '#10b981',
              border: 'none',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            Refresh
          </button>
          <button
            onClick={() => setNeedRefresh(false)}
            style={{
              marginLeft: '4px',
              background: 'transparent',
              color: 'white',
              border: '1px solid white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;