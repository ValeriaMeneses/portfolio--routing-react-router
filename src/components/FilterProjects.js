import React, { Component } from 'react';
import { projectData } from '../data/datasource'
// import Project from './Projects.js'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */


class FilterProjects extends Component {
  constructor() {
    super();
    this.state = {
      list: 'all'
    }
  }
    _changeList(val){
      this.setState({
        list: val
      })
    }

    _styleList(projectData){
      let newAr = projectData.map(function(elem){
        let boxStyle
        let textStyle
      if (elem.solo === true) {
        textStyle = true
        boxStyle = 'project project--solo'
      }else {
        textStyle = false
        boxStyle = 'project project--team'
      }
      return (
        <div className= {boxStyle}>
          <span className="project__title">{elem.projectName}</span>
        </div>
      )
      })

      return newAr
    }


  render() {
    // let newArray = projectData.map(function (elements) {
    //   console.log(elements);
    //   // console.log(elements);
    //   // projectName
    //   // role
    //   // solo
    //   return <Project li = {elements} />
    // })
    let filterProjects = projectData.filter(name => {
      if (this.state.list === "all") return true;
      if (name.solo === true && this.state.list === 'true') return true;
      if (name.solo === false && this.state.list === 'false') return true;
    });


    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" className="project-type project-type--all project-type--selected" onClick={() => {this._changeList('all')}}>
              All
            </span>

            <span data-ptype="solo" className="project-type project-type--solo "  onClick={() => {this._changeList('true')}}>
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" className="project-type project-type--team" onClick={() => {this._changeList('false')}} >
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>
            {this._styleList(filterProjects)}

          </div>
        </section>

    );
  }
}

export default FilterProjects
