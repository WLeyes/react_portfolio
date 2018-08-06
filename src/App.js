import React, { Component } from 'react';
import logo from './logo.svg';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <div class="logo">
        <div class="logo--icon fa-10x">
          <span class="fa-layers fa-fw">
            <i class="fal fa-desktop-alt"></i>
            <i class="fas fa-code" data-fa-transform="shrink-10 up-3.5"></i>
          </span>
        </div>
        <p class="logo--line1">Warren</p>
        <p class="logo--line2">Leyes</p>
        <p class="logo--line3">Front-end Web Developer</p>
      </div>
    );
  }
}

export default App;
