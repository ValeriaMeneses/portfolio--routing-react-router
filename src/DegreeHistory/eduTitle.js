import React, { Component } from 'react';

class EduTitle extends Component{
  render(){
    return (
      <div className="degree">
        <h5 className="degree__institute">{this.props.inst}</h5>
        <p className="degree__field">{this.props.field}</p>
        <p className="degree__dates">{this.props.dates}</p>
      </div>
    )
  }
}

export default EduTitle
