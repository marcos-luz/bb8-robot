import React from 'react';

import '../styles/Head.scss';

function Head(props) {
  return(
    <div className="head"
        style={{WebkitTransform: `translateX(${(props.mouseX - props.droidX) / 15}px) rotateZ(${(props.mouseX - props.droidX) / 25}deg)`}}>
      <div className="stripe one"></div>
      <div className="stripe two"></div>
      <div className={'eyes ' + (props.toTheRight ? 'right' : '')}>
        <div className="eye one"></div>
        <div className="eye two"></div>
      </div>
      <div className={'stripe detail ' + (props.toTheRight ? 'right' : '')}>
        <div className="detail zero"></div>
        <div className="detail zero"></div>
        <div className="detail one"></div>
        <div className="detail two"></div>
        <div className="detail three"></div>
        <div className="detail four"></div>
        <div className="detail five"></div>
        <div className="detail five"></div>
      </div>
      <div className="stripe three"></div>
    </div>
  );
}

export default Head;