import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from "react";
import Clock from '../../components/Clock';


const Home = () => {
  return (
    <div className="container">
      <h1>POMODORO TIMER</h1>
      <blockquote style={styles.blockquote}>By Leonardo Overbeck da Silva</blockquote>
      <Clock />
    </div>
  );
}

const styles = {
  blockquote: {
    borderLeft: '5px solid #1a237e',
  }
}

export default Home;
