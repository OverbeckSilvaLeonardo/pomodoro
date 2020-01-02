import React from "react";

const TimerButton = props => {
  let className = `col s12 waves-effect waves-light btn-large ${
    props.is_active ? "red darken-1" : "indigo darken-4"
  }`;

  let title = props.is_active ? "Stop" : "Start";

  return (
    <button className={className} onClick={props.onClickCallBack}>
      {title}
    </button>
  );
};

export default TimerButton;
