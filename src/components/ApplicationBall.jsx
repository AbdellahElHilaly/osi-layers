import React from 'react';
import SmallBall from './SmallBall';

const ApplicationBall = ({ className, onClick }) => {
  return (
    <SmallBall
      className={className}
      onClick={onClick}
      icon="eos-icons:application"
      color="pink"
      position={{ left: '75%', top: '60%' }}
      size="w-18 h-18"
    />
  );
};

export default ApplicationBall;