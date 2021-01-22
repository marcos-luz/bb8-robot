import React from 'react';


import Antennas from './Antennas';
import Head from './Head';
import Ball from './Ball';

import '../App.scss';

function BB8(props) {
  return(
    <div className="bb8" style={{WebkitTransform: `translateX(${props.droidX}px)`}}>
      <Antennas toTheRight={props.toTheRight} mouseX={props.mouseX} droidX={props.droidX} />
      <Head toTheRight={props.toTheRight} mouseX={props.mouseX} droidX={props.droidX} />
      <Ball droidX={props.droidX}/>
      <div className="shadow"></div>
    </div>
  );
}

export default BB8;