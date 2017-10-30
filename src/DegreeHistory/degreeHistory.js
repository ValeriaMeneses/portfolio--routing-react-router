import React, { Component } from 'react';
import EduTitle from './eduTitle.js'

class DegreeHistory extends Component{
  render(){
    var eduTitle = this.props.edu.map(function (element){
      // console.log(element);
      return <EduTitle inst = {element.institute} field = {element.fieldOfStudy} dates = {element.dates} />
    })
    return (
      <section>
        <h4>Education</h4>

        <div className="degree-list">
          {eduTitle}
        </div>

      </section>
    )
  }
}

export default DegreeHistory
