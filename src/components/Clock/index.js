import React, { Component } from "react";

const TimerInput = props => (
  <div className="input-field col s6">
    <input
      type={props.type}
      name={props.name}
      onChange={props.onCangeCallback}
    />

    <label htmlFor={props.name}>{props.label}</label>
  </div>
);

const TimerLabel = props => (
  <div className="col s6">
    <h2 className="center-align">{props.time}</h2>
  </div>
);

const TimerButton = props => {
  let className = `col s12 waves-effect waves-light btn ${props.is_active ? 'red' : ''}`;
  let title = props.is_active ? 'Stop' : 'Start';

  return (
    <a className={className} onClick={props.onClickCallBack}>{title}</a>
  );
}
export default class Clock extends Component {
  constructor() {
    super();

    this.state = {
      is_active: false,
      session_duration: "00:00",
      break_duration: "00:00",
    };
  }

  handleActivation = () =>
    this.setState({ ...this.state, is_active: !this.state.is_active });

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
