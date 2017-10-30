import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/styles.css';
import './App.css';

import PortfolioFixed from './portafolio-fixed/portafolioFixed.js';
import Home from './Home.js';
import Cv from './Cv.js';
import Projects from './Projects.js'
import Nav from './Nav.js'

class AppContainer extends Component {
  render() {
    return (
      <div id="app-container">
        <PortfolioFixed />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cv" component={Cv} />
          <Route exact path="/projects" component={Projects} />
        </Switch>

      </div>
    );
  }
}

export default AppContainer;
