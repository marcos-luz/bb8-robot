import '../styles/Antennas.scss';

function ControlWrap(props){
  return(
    <div className='control-wrap'>
      <p>{props.name}: {props.value}</p>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step="0.1"
        value={props.value}
        onChange={props.handleFunction} 
      />
    </div>
  );
}

export default ControlWrap

