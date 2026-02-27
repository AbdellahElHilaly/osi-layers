import React from 'react';
import SmallBall from './SmallBall';

const SessionBall = ({ className, onClick }) => {
  return (
    <SmallBall
      className={className}
      onClick={onClick}
      icon="material-symbols:settings-ethernet"
      color="yellow"
      position={{ left: '70%', top: '25%' }}
    />
  );
};

export default SessionBall;