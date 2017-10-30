import React, { Component } from 'react';

import './css/styles.css';
import PortfolioContent from './portafolio-content/portafolioContent.js'
import SkillsList from './SkillsList/skillsList.js'
import {skills} from './data/datasource.js';


class Home extends Component{
  render (){
    return(
      <div>
        <PortfolioContent />
        <SkillsList skills={skills} />
      </div>
    )
  }
}

export default Home;
