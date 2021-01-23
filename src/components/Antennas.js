import React from 'react';

import '../styles/Antennas.scss';

function Antennas(props) {
  return(
    <div className={'antennas ' + (props.toTheRight ? 'right' : '')} style={{WebkitTransform: `translateX(${(props.mouseX - props.droidX) / 25}px) rotateZ(${(props.mouseX - props.droidX) / 80 }deg)`}}>
      <div className="antenna short"></div>
      <div className="antenna long"></div>
    </div>
  );
}

export default Antennas;