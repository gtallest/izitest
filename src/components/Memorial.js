import React, { Component } from 'react'

class Memorial extends Component {
  render () {

    const memorialName = `${this.props.name.first ? this.props.name.first : 'N/A'} ${this.props.name.last ? this.props.name.last : 'N/A'}` || 'N/A'

    return (
      <div className="memorial-item">
        <img className="memorial-image" src={this.props.img} />
        <div className="memorial-text-content">
          <p className="memorial-name">{memorialName}</p>
          <p className="memorial-death-city">{this.props.cityOfDeath || "---"}</p>
          <p className="memorial-year-span">{this.props.yearOfBirth} - {this.props.yearOfDeath}</p>
          <p className="memorial-creation-date">{this.props.creationDate || 'N/A'}</p>
        </div>
      </div>
    )
  }
}

export default Memorial
