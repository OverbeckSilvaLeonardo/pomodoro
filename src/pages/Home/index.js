import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from "react";
import Clock from '../../components/Clock';


const Home = () => {
  return (
    <div className="container">
      <h1>POMODORO</h1>
      <Clock />
    </div>
  );
}

export default Home;
