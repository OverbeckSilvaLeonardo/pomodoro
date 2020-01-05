import React, { Component } from "react";
import TimerButton from "./TimerButton";
import TimerInput from "./TimerInput";
import TimerLabel from "./TimerLabel";
import TimeValidator from "../../lib/TimeValidator";

export default class Clock extends Component {
  constructor() {
    super();

    this.state = {
      is_active: false,
      session_duration: "",
      break_duration: "",
    };
  }

  handleActivation = () => {
    let { session_duration, break_duration } = this.state;

    TimeValidator.validateTime(session_duration);
    TimeValidator.validateTime(break_duration);

    this.setState({ ...this.state, is_active: !this.state.is_active });
  };

  updateTimer = (name, value) => {

    if (value.length === 2)
      value = `${value}:`;

    this.setState({ ...this.state, [name]: value });
  }

  render = () => {
    let { session_duration, break_duration, is_active } = this.state;

    return (
      <>
        <div className="row">

          <div className='col s6'>
            <TimerInput
              name={"session_duration"}
              type={"text"}
              label={"Session Duration"}
              onCangeCallback={this.updateTimer}
              defaultValue={session_duration}
            />

            <TimerLabel time={session_duration} />

            <TimerButton
              title='Clear'
              className=' col s12 waves-effect waves-light btn indigo darken-4'
              onClickCallBack={() => this.updateTimer('session_duration', '')}
            />


          </div>

          <div className='col s6'>
            <TimerInput
              name={"break_duration"}
              type={"text"}
              label={"Break Duration"}
              onCangeCallback={this.updateTimer}
              defaultValue={break_duration}
            />

            <TimerLabel time={break_duration} />
  
            <TimerButton
              title='Clear'
              className='col s12 waves-effect waves-light btn indigo darken-4'
              onClickCallBack={() => this.updateTimer('break_duration', '')}
            />
          </div>
        </div>

        <div className="row">
          <TimerButton
            className={
              `col s12 waves-effect waves-light btn-large ${is_active ? "red darken-1" : "indigo darken-4"}`
            }
            title={is_active ? "Stop" : "Start"}
            onClickCallBack={() => this.handleActivation()}
          />
        </div>

      </>
    );
  };
}
