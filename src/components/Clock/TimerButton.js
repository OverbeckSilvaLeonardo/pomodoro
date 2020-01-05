import React from "react";

const TimerButton = props => (
    <button className={props.className} onClick={props.onClickCallBack}>
      {props.title}
    </button>
);

export default TimerButton;
