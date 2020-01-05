import React from "react";

const TimerLabel = props => <h2 className="center-align">{props.time ? props.time : '00:00'}</h2>;

export default TimerLabel;