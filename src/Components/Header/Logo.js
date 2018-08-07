import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <div className="logo--icon fa-10x">
          <span className="fa-layers fa-fw">
            <i className="fal fa-desktop-alt"></i>
            <i className="fas fa-code" data-fa-transform="shrink-10 up-3.5"></i>
          </span>
        </div>
        <p className="logo--line1">Warren</p>
        <p className="logo--line2">Leyes</p>
        <p className="logo--line3">Front-end Web Developer</p>
      </div>
    )
  }
}

export default Logo;