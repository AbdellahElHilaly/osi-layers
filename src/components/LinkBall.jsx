import React from 'react';
import SmallBall from './SmallBall';

const LinkBall = ({ className, onClick }) => {
  return (
    <SmallBall
      className={className}
      onClick={onClick}
      icon="mingcute:link-fill"
      color="cyan"
      position={{ right: '30%', top: '50%' }}
      size="w-24 h-24"
    />
  );
};

export default LinkBall;