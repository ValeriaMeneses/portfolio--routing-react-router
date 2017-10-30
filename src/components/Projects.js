import React, { Component } from 'react';

class Project extends Component {
  render(){
    let object = this.props.li
    let pro = 'project ' + 'project--' + object.solo

    return(
      <div className={pro}>
       <span className="project__title">{object.projectName}</span>
      </div>
  )
  }
}

export default Project
