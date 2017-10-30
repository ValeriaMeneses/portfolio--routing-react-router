import React, { Component } from 'react';
import Skill from './skill.js';

class SkillsList extends Component{
  render(){

    var sk =  this.props.skills.map(function (element) {
      // console.log(element);
        return <Skill li = {element} />
      })

    return (
      <section>
        <h4>Skills</h4>
        <div className="skills-list">
          {sk}
        </div>
      </section>

    )
  }
}

export default SkillsList
