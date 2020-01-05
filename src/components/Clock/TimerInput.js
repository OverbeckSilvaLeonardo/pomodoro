import React from "react";
import "./css/TimerInput.css";

const TimerInput = props => {
  return (
    <div className="input-field">
      <input
        type={props.type}
        name={props.name}
        onChange={event => props.onCangeCallback(event.target.name, event.target.value)}
        value={props.defaultValue}
        maxLength='5'
      />

      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};

export default TimerInput;
