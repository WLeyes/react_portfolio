import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './css/styles.css';

import MainContent from './MainContent';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={MainContent} />
      </BrowserRouter>
    );
  }
}

export default App;
