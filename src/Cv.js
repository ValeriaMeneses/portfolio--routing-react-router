import React, { Component } from 'react';

import './css/styles.css';
import DegreeHistory from './DegreeHistory/degreeHistory.js'
import WorkHistory from './WorkHistory/workHistory.js'
import {eduList, jobsList} from './data/datasource.js';



class Cv extends Component{
  render (){
    return(
      <div>
        <DegreeHistory edu={eduList} />
        <WorkHistory job={jobsList} />
      </div>
    )
  }
}

export default Cv;
