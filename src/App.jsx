import React, { useState } from 'react';
import NetworkView from './components/NetworkView';
import HostUniverse from './components/HostUniverse';
import RouterUniverse from './components/RouterUniverse';
import UniverseView from './components/UniverseView';
import PhysicsUniverse from './components/PhysicsUniverse';
import LinkUniverse from './components/LinkUniverse';
import NetworkUniverse from './components/NetworkUniverse';
import TransportUniverse from './components/TransportUniverse';
import SessionUniverse from './components/SessionUniverse';
import PresentationUniverse from './components/PresentationUniverse';
import ApplicationUniverse from './components/ApplicationUniverse';
import HomePage from './components/HomePage';
import IpClassesUniverse from './components/IpClassesUniverse';
import IpSpecificClassUniverse from './components/IpSpecificClassUniverse';
import './styles/mobile.css';
import './styles/animations.css';

function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [currentView, setCurrentView] = useState('network');
  const [currentIpClass, setCurrentIpClass] = useState('A');
  const [isHostExploding, setIsHostExploding] = useState(false);
  const [isRouterExploding, setIsRouterExploding] = useState(false);
  const [isSwitchExploding, setIsSwitchExploding] = useState(false);
  const [previousView, setPreviousView] = useState('network'); // Track where we came from

  const handleLaunch = (mode) => {
    setShowHomePage(false);
    if (mode === 'ip') {
      setCurrentView('ip-classes');
    } else {
      setCurrentView('network');
    }
  };

  const handleHome = () => {
    setShowHomePage(true);
    setCurrentView('network');
    setIsHostExploding(false);
    setIsRouterExploding(false);
    setIsSwitchExploding(false);
  };

  const handleHostExplosion = () => {
    if (isHostExploding) return;

    setIsHostExploding(true);

    // Trigger explosion animation, then switch to host universe view
    setTimeout(() => {
      setCurrentView('host-universe');
      setIsHostExploding(false);
    }, 800);
  };

  const handleRouterExplosion = () => {
    if (isRouterExploding) return;

    setIsRouterExploding(true);

    // Trigger explosion animation, then switch to router universe view
    setTimeout(() => {
      setCurrentView('router-universe');
      setIsRouterExploding(false);
    }, 800);
  };

  const handleSwitchExplosion = () => {
    if (isSwitchExploding) return;

    setIsSwitchExploding(true);

    // Trigger explosion animation, then switch to switch universe view
    setTimeout(() => {
      setCurrentView('switch-universe');
      setIsSwitchExploding(false);
    }, 800);
  };

  const navigateToPhysicsUniverse = () => {
    setPreviousView(currentView);
    setCurrentView('physics-universe');
  };

  const navigateToLinkUniverse = () => {
    setPreviousView(currentView);
    setCurrentView('link-universe');
  };

  const navigateToNetworkUniverse = () => {
    setPreviousView(currentView);
    setCurrentView('network-universe');
  };

  const navigateToTransportUniverse = () => {
    setPreviousView(currentView);
    setCurrentView('transport-universe');
  };

  const navigateToSessionUniverse = () => {
    setPreviousView(currentView);
    setCurrentView('session-universe');
  };

  const navigateToPresentationUniverse = () => {
    setPreviousView(currentView);
    setCurrentView('presentation-universe');
  };

  const navigateToApplicationUniverse = () => {
    setPreviousView(currentView);
    setCurrentView('application-universe');
  };

  const returnToPreviousUniverse = () => {
    setCurrentView(previousView);
  };

  const returnToNetwork = () => {
    setCurrentView('network');
  };

  const returnToHostUniverse = () => {
    setCurrentView('host-universe');
  };

  const returnToRouterUniverse = () => {
    setCurrentView('router-universe');
  };

  const returnToSwitchUniverse = () => {
    setCurrentView('switch-universe');
  };

  const handleIpClassClick = (ipClass) => {
    setCurrentIpClass(ipClass);
    setCurrentView('ip-specific-class');
  };

  const returnToIpClasses = () => {
    setCurrentView('ip-classes');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'network':
        return (
          <NetworkView
            onHostClick={handleHostExplosion}
            onRouterClick={handleRouterExplosion}
            onSwitchClick={handleSwitchExplosion}
            isHostExploding={isHostExploding}
            isRouterExploding={isRouterExploding}
            isSwitchExploding={isSwitchExploding}
            onReturn={handleHome}
          />
        );
      case 'host-universe':
        return (
          <HostUniverse
            onReturn={returnToNetwork}
            onPhysicsClick={navigateToPhysicsUniverse}
            onLinkClick={navigateToLinkUniverse}
            onNetworkClick={navigateToNetworkUniverse}
            onTransportClick={navigateToTransportUniverse}
            onSessionClick={navigateToSessionUniverse}
            onPresentationClick={navigateToPresentationUniverse}
            onApplicationClick={navigateToApplicationUniverse}
          />
        );
      case 'router-universe':
        return (
          <RouterUniverse
            onReturn={returnToNetwork}
            onPhysicsClick={navigateToPhysicsUniverse}
            onLinkClick={navigateToLinkUniverse}
            onNetworkClick={navigateToNetworkUniverse}
          />
        );
      case 'switch-universe':
        return (
          <UniverseView
            onReturn={returnToNetwork}
            onPhysicsClick={navigateToPhysicsUniverse}
            onLinkClick={navigateToLinkUniverse}
          />
        );
      case 'physics-universe':
        return (
          <PhysicsUniverse onReturn={returnToPreviousUniverse} />
        );
      case 'link-universe':
        return (
          <LinkUniverse onReturn={returnToPreviousUniverse} />
        );
      case 'network-universe':
        return (
          <NetworkUniverse onReturn={returnToPreviousUniverse} />
        );
      case 'transport-universe':
        return (
          <TransportUniverse onReturn={returnToHostUniverse} />
        );
      case 'session-universe':
        return (
          <SessionUniverse onReturn={returnToHostUniverse} />
        );
      case 'presentation-universe':
        return (
          <PresentationUniverse onReturn={returnToHostUniverse} />
        );
      case 'application-universe':
        return (
          <ApplicationUniverse onReturn={returnToHostUniverse} />
        );
      case 'ip-classes':
        return (
          <IpClassesUniverse
            onReturn={() => setShowHomePage(true)}
            onClassClick={handleIpClassClick}
          />
        );
      case 'ip-specific-class':
        return (
          <IpSpecificClassUniverse
            ipClass={currentIpClass}
            onReturn={returnToIpClasses}
          />
        );
      default:
        return (
          <NetworkView
            onHostClick={handleHostExplosion}
            onRouterClick={handleRouterExplosion}
            onSwitchClick={handleSwitchExplosion}
            isHostExploding={isHostExploding}
            isRouterExploding={isRouterExploding}
            isSwitchExploding={isSwitchExploding}
            onReturn={handleHome}
          />
        );
    }
  };

  return (
    <div className="App">
      {showHomePage ? (
        <HomePage onLaunch={handleLaunch} />
      ) : (
        renderCurrentView()
      )}
    </div>
  );
}

export default App;