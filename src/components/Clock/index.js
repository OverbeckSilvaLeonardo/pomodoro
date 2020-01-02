import React, { Component } from "react";
import TimerButton from './TimerButton';
import TimerInput from './TimerInput';
import TimerLabel from './TimerLabel';
import TimeValidator from '../../lib/TimeValidator';

export default class Clock extends Component {
  constructor() {
    super();

    this.state = {
      is_active: false,
      session_duration: "00:00",
      break_duration: "00:00",
    };
  }

  handleActivation = () => {

    let { session_duration, break_duration } = this.state;

    TimeValidator.validateTime(session_duration);
    TimeValidator.validateTime(break_duration);

    this.setState({ ...this.state, is_active: !this.state.is_active });
  }

  updateTimer = event =>
    this.setState({ ...this.state, [event.target.name]: event.target.value });

  render = () => (
    <>
      <div className="row">
        <TimerInput
          name={"session_duration"}
          type={"text"}
          label={"Session Duration"}
          onCangeCallback={this.updateTimer}
        />

        <TimerInput
          name={"break_duration"}
          type={"text"}
          label={"Break Duration"}
          onCangeCallback={this.updateTimer}
        />
      </div>

      <div className="row">
        <TimerLabel time={this.state.session_duration} />
        <TimerLabel time={this.state.break_duration} />
      </div>

      <div className="row">
        <TimerButton is_active={this.state.is_active} onClickCallBack={this.handleActivation}/>
      </div>
    </>
  );
}
