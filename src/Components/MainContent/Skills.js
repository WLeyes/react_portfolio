import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <section id="skills" className="skills container">
        <h2>Skills Overview:</h2>
        <ul>
          <li><i className="fab fa-html5"></i></li>
          <li><i className="fab fa-css3"></i></li>
          <li><i className="fab fa-sass"></i></li>
          <li><i className="fab fa-js"></i></li>
          <li><i className="fab fa-react"></i></li>
          <li><i className="fab fa-vuejs"></i></li>
          <li><i className="fab fa-git"></i></li>
        </ul>
        <canvas id="charts--doughnut"></canvas>
      </section>
    )
  }
}

export default Skills;