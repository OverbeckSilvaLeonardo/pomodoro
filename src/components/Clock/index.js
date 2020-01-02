import React, { Component } from "react";

const TimeInput = props => (
  <div className="input-field">
    <input type={props.type} name={props.name} />
    <label htmlFor={props.name}>{props.label}</label>
  </div>
);
export default class Clock extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <TimeInput name={"session_timer"} type={"text"} label={"Session Duration"} />
          <TimeInput name={"break_timer"} type={"text"} label={"Break Duration"} />
        </div>
      </div>
    );
  }
}
