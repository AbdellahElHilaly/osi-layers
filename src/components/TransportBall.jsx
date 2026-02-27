import React from 'react';
import SmallBall from './SmallBall';

const TransportBall = ({ className, onClick }) => {
  return (
    <SmallBall
      className={className}
      onClick={onClick}
      icon="lets-icons:transger"
      color="green"
      position={{ left: '25%', top: '70%' }}
    />
  );
};

export default TransportBall;