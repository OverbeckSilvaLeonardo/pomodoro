import React from "react";
import "./css/TimerButton.css";


const TimerButton = props => (
    <button className={props.className} onClick={props.onClickCallBack}>
      {props.title}
    </button>
);

export default TimerButton;
