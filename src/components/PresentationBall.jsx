import React from 'react';
import SmallBall from './SmallBall';

const PresentationBall = ({ className, onClick }) => {
  return (
    <SmallBall
      className={className}
      onClick={onClick}
      icon="streamline-ultimate-color:presentation-projector"
      color="purple"
      position={{ left: '45%', top: '80%' }}
    />
  );
};

export default PresentationBall;