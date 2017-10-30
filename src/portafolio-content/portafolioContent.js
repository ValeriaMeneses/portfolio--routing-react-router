import React, { Component } from 'react';

import Header from './header.js'
import Summary from './summary.js'
import ContanctInfo from './contanctInfo.js'

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
