import React from "react";

const TimerLabel = props => (
    <div className="col s6">
      <h2 className="center-align">{props.time}</h2>
    </div>
  );

export default TimerLabel;