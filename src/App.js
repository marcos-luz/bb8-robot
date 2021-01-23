import React, { Component } from 'react';
import './App.scss';

import BB8 from './components/BB8';
import ControlWrap from './components/ControlWrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      droidX: 0,
      mouseX: 0,
      droidY: 0, // Estado que controla o salto, adicionado por nós.
      toTheRight: true,
      speed: 2,
      accelMod: 1
    }
  }

  handleMouseMove(event) {
    this.setState({
      mouseX: event.pageX
    });
  }

  // Método que controla o salto, adicionado por nós
  handleSpacePress() {
    this.setState({
      droidY: -100
    })
    setTimeout(() => {
      this.setState({
        droidY:0
      })
    }, 280);
  }

  handleSpeedChange(e) {
    if(parseFloat(e.target.value)) {
      this.setState({
        speed: e.target.value
      })
    }
  }

  handleAccelChange(e) {
    if(parseFloat(e.target.value)) {
      this.setState({
        accelMod: e.target.value
      })
    }
  }

  movement() {
    let {droidX, mouseX, speed, accelMod} = this.state;

    if(Math.abs(Math.round(droidX)-mouseX) !== 1){
      
      let distance = mouseX - droidX;
      let acceleration = Math.abs(distance * accelMod) / 100;

      if (droidX < mouseX) {
        this.setState({
          droidX: droidX+(speed*acceleration),
          toTheRight: true
        });
      }
    
      else {
        this.setState({
          droidX: droidX-(speed*acceleration),
          toTheRight: false
        });
      }
    }
  }

  componentWillMount() {
    this.setState({
      mouseX: 300
    });
  }

  componentDidMount() {
    document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    
    // listener da tecla espaço, adicionado por nós
    document.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        this.handleSpacePress();
      }
    })

    setInterval(this.movement.bind(this), 1);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
  }

  render() {
    let {speed, accelMod, droidX, droidY, mouseX, toTheRight} = this.state;
    
    return (
      <div>
        {/* Controls */}
        <div className="config">
          <ControlWrap name="Velocidade" min="0" max="11" step="0.1" value={speed} handleFunction={this.handleSpeedChange.bind(this)}/>
          <ControlWrap name="Aceleração" min="0" max="3" step="0.1" value={accelMod} handleFunction={this.handleAccelChange.bind(this)}/>
        </div>

        {/* BB8 */}
        <div>
          <BB8 speed={speed} accelMod={accelMod} droidY={droidY} droidX={droidX} mouseX={mouseX} toTheRight={toTheRight} />
        </div>
        <div className="instructions">
          <p>Para mover o BB8: mova o mouse para a esquerda ou direita; aperte espaço para.</p>
        </div>   
      </div>
    );
  }
}

export default App;