import React from 'react';
import SmallBall from './SmallBall';

const PhysicsBall = ({ className, onClick }) => {
  return (
    <SmallBall
      className={className}
      onClick={onClick}
      icon="hugeicons:physics"
      color="purple"
      position={{ left: '30%', top: '40%' }}
      size="w-24 h-24"
    />
  );
};

export default PhysicsBall;