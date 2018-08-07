import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="grid__col--12">
        <nav>
          <ul className="nav container">
            <li className="nav__item"><a href="#about"><i className="fal fa-user"></i><br />About</a></li>
            <li className="nav__item"><a href="#skills"><i className="fal fa-code"></i><br />Skills</a></li>
            <li className="nav__item"><a href="#projects"><i className="fal fa-project-diagram"></i><br />Projects</a></li>
            <li className="nav__item"><a href="#contact"><i className="fal fa-at"></i><br />Contact</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation;