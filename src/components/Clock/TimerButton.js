import React from "react";
import './css/TimerButton.css';

const TimerButton = props => {
  let className = `col s12 waves-effect waves-light btn ${
    props.is_active ? "red darken-1" : "indigo darken-4"
  }`;

  let title = props.is_active ? "Stop" : "Start";

  return (
    <a className={className} onClick={props.onClickCallBack}>
      {title}
    </a>
  );
};

export default TimerButton;