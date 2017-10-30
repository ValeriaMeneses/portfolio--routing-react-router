import React, { Component } from 'react';

import Header from './portafolio-content/header.js'
import Summary from './portafolio-content/summary.js'
import ContanctInfo from './portafolio-content/contanctInfo.js'

class PortfolioContent extends Component{
  render(){
    return(
      <div class="portfolio-content">
        <Header />
        <Summary />
        <ContanctInfo />
      </div>
    )
  }
}

export default PortfolioContent;
