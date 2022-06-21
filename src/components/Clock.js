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
      sessionMin: 25,
      breakMin: 5,
      timerSec: 1500,
      isOnSession: true,
      isTicking: false
    };
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
              onClick={() => console.log("click")}
            />
            <Button
              iconClass="fa fa-refresh"
              text=" Reset"
              onClick={() => console.log("click")}
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
