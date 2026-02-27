import React, { useState, useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

const PWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);

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
      
      // Show install button on mobile devices after 3 seconds
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          setShowInstallButton(true);
        }, 3000);
      }
    };

    const handleAppInstalled = () => {
      console.log('App was installed successfully');
      setDeferredPrompt(null);
      setShowInstallButton(false);
      setIsInstallable(false);
    };

    // Check if already in standalone mode (already installed)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    
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
      } else {
        console.log('User dismissed the install prompt');
      }
      
      setDeferredPrompt(null);
      setShowInstallButton(false);
    } catch (error) {
      console.error('Error during installation:', error);
    }
  };

  // Only show on mobile devices and when installable
  if (!showInstallButton || !isInstallable || window.innerWidth > 768) {
    return null;
  }

  return (
    <>
      <button
        onClick={handleInstallClick}
        style={{
          position: 'fixed',
          top: '15px',
          right: '15px',
          background: '#10b981',
          color: 'white',
          border: 'none',
          padding: '8px',
          borderRadius: '50%',
          fontSize: '16px',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 2px 8px rgba(16, 185, 129, 0.4)',
          transition: 'all 0.2s',
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Install App"
      >
        📱
      </button>

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
    </>
  );
};

export default PWAInstall;