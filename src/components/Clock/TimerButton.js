import React from "react";

const TimerButton = props => {
  let className = `col s12 waves-effect waves-light btn ${
    props.is_active ? "red" : ""
  }`;
  let title = props.is_active ? "Stop" : "Start";

  return (
    <a className={className} onClick={props.onClickCallBack}>
      {title}
    </a>
  );
};

export default TimerButton;