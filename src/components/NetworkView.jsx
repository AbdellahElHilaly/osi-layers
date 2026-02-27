import React from 'react';
import { Icon } from '@iconify/react';
import HostBall from './HostBall';
import RouterBall from './RouterBall';
import SwitchBall from './SwitchBall';

const NetworkView = ({
  onHostClick,
  onRouterClick,
  onSwitchClick,
  isHostExploding,
  isRouterExploding,
  isSwitchExploding,
  onReturn
}) => {
  return (
    <div className="space-bg min-h-screen font-sans text-white overflow-hidden">
      {/* Exit Button */}
      <button
        onClick={onReturn}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
      >
        <Icon icon="mdi:close" className="text-2xl text-white" />
      </button>

      <div className="relative z-10 min-h-screen py-20 flex flex-col md:flex-row md:items-center justify-center items-center overflow-auto gap-8 md:gap-0">

        <HostBall
          isExploding={isHostExploding}
          onClick={onHostClick}
        />

        <RouterBall
          isExploding={isRouterExploding}
          onClick={onRouterClick}
        />

        <SwitchBall
          onClick={onSwitchClick}
          isExploding={isSwitchExploding}
        />

      </div>
    </div>
  );
};

export default NetworkView;