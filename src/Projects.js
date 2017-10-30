import React, { Component } from 'react';

import './css/styles.css';
import ShowHideTech from './components/ShowHideTech.js'
import FilterProjects from './components/FilterProjects.js'

class Projects extends Component{
  render (){
    return(
      <div>
        <ShowHideTech />
        <FilterProjects />
      </div>
    )
  }
}

export default Projects;
