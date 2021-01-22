import React, { Component } from 'react';
import './../App.scss';

function ControlWrap(props){
  return(
    <div className='control-wrap'>
      <p>Speed: {props.speed}</p>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step="0.1"
        value={props.speed}
        onChange={props.handleFunction} 
      />
    </div>
  );
}

export default ControlWrap

