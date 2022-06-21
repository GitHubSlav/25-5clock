import React from 'react';
import Button from './Button.js'
import LengthHandler from './LengthHandler.js';

import '../styling/Clock.css';
import '../styling/Button.css';
import '../styling/LengthHandler.css'

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionMin: 1,
      breakMin: 1,
      timerSec: 60,
      timerId: null,
      isOnSession: true,
      isTicking: false
    };

    this.audioBeep = null;

    this.Reset = this.Reset.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.SwitchTimer = this.SwitchTimer.bind(this);
    this.StartPause = this.StartPause.bind(this);
  }

  Reset() {
    let defaultState = {
      sessionMin: 25,
      breakMin: 5,
      timerSec: 1500,
      timerId: null,
      isOnSession: true,
      isTicking: false
    };
    clearInterval(this.state.timerId);
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
    this.setState(defaultState);
  }

  decrementTimer() {
    this.setState((state) => ({ timerSec: state.timerSec - 1 }));
    this.SwitchTimer();
  }

  StartPause() {
    if (!this.state.isTicking) {
      this.setState({
        isTicking: true,
        timerId: setInterval(this.decrementTimer, 1000)
      });
    } 
    else {
      clearInterval(this.state.timerId);
      this.setState({ isTicking: false, timerId: null });
    }
  }

  SwitchTimer(){
    if (this.state.timerSec <= 0){
      this.audioBeep.currentTime = 0;
      this.audioBeep.play();
      if (this.state.isOnSession){
        this.setState({isOnSession: false, timerSec: this.state.breakMin * 60});
      }
      else {
        this.setState({isOnSession: true, timerSec: this.state.sessionMin * 60});
      }
    }
  }

  toMMSS(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  }

  render() {
    return (
      <div id="clock">
        <audio id="beep" preload="auto"
          ref={(audio) => {this.audioBeep = audio;}}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
        </audio>
        <div id="upper-panel">
          <div id="timer-label" className="shadowed-text">
            {this.state.isOnSession ? "Session" : "Break"}
          </div>
          <div id="time-left" className="shadowed-text">
            {this.toMMSS(this.state.timerSec)}
          </div>
          <div id="play-pause-restart">
            <Button
              iconClass={this.state.isTicking ? "fa fa-pause": "fa fa-play"}
              text={this.state.isTicking ? "Pause" : "Start"}
              onClick={this.StartPause}
            />
            <Button
              iconClass="fa fa-refresh"
              text=" Reset"
              onClick={this.Reset}
            />
          </div>
        </div>
        <div id="lower-panel">
          <LengthHandler
            header="Session Length"
            time={this.state.sessionMin}
            minUp={() => console.log("click")}
            minDown={() => console.log("click")}
          />
          <LengthHandler
            header="Break Length"
            time={this.state.breakMin}
            minUp={() => console.log("click")}
            minDown={() => console.log("click")}
          />
        </div>
      </div>
    );
  }
}

export default Clock;
