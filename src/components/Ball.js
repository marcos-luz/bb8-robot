import React from 'react';

import '../App.scss';

function Ball(props) {
  return (
    <div className="ball" style={{WebkitTransform: `rotateZ(${props.droidX / 2}deg)`}}>
      <div className="lines one"></div>
      <div className="lines two"></div>
      <div className="ring one"></div>
      <div className="ring two"></div>
      <div className="ring three"></div>
    </div>
  );
}

export default Ball;