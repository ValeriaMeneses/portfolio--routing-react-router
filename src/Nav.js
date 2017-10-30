import React, { Component } from 'react';

import './css/styles.css';
import { Link } from 'react-router-dom';

class Nav extends Component{
  render (){
    return(
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    )
  }
}

export default Nav;
