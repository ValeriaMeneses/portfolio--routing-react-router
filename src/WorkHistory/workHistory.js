import React, { Component } from 'react';

import Job from './job.js'

class WorkHistory extends Component{
  render(){
    var jobs = this.props.job.map(function (element) {
      // console.log(element);
      return <Job yearEnd = {element.years.end} yearStart = {element.years.start} title = {element.title} company = {element.company} description = {element.description} />

    })
    return (
      <section>
        <h4>Work Experience</h4>
        <div className="job-timeline">
          {jobs}
        </div>
      </section>
    )
  }
}

export default WorkHistory
