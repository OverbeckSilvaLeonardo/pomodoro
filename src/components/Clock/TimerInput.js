import React from "react";
import "./css/TimerInput.css";

const maskTime = value => {

  // Continuar daqui...
  if (value.length === 2) {
    return `${value}:`
  }

  return value;
}


const TimerInput = props => (
  <div className="input-field col s6">
    <input
      type={props.type}
      name={props.name}
      onChange={event => {
        let { value, name } = event.target;
        let maskedValue = maskTime(value);
        props.onCangeCallback(name, maskedValue);
      }}
    />

    <label htmlFor={props.name}>{props.label}</label>
  </div>
);

export default TimerInput;
