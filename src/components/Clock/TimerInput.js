import React from "react";
import './css/TimerInput.css';

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

export default TimerInput;