import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMemorials, sortMemorialsByDate, sortMemorialsByLastName } from '../actions/actionCreators'

import Memorial from './Memorial'

class ContentPanel extends Component {
  constructor(props) {
    super(props)
    this.sortByLastName = this.sortByLastName.bind(this)
    this.sortByDate = this.sortByDate.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMemorials())
  }

  renderMemorials () {
    console.log('rendering memorials')
    return this.props.memorials
    .map(memorial => {
      const convertedCreationDate = new Date(memorial.creationDate)
      const convertedBirthYear = new Date(memorial.dateOfBirth)
      const convertedDeathYear = new Date(memorial.dateOfDeath)
      return (
        <Memorial
          key={memorial.id}
          name={memorial.name ? memorial.name : 'Unknown Name'}
          creationDate={convertedCreationDate.toLocaleString()}
          img={memorial.image}
          cityOfDeath={memorial.cityOfDeath}
          yearOfBirth={convertedBirthYear.getFullYear() || "????"}
          yearOfDeath={convertedDeathYear.getFullYear() || "????"}
        />
      )
    })
  }

  renderPlaceholder () {
    return (
      <div>
        <div className="memorial-placeholder">

        </div>
        <div className="memorial-placeholder">

        </div>
        <div className="memorial-placeholder">

        </div>
      </div>
    )
  }

  sortByLastName () {
    console.log('sorting by last name')
    this.props.sortByLastName(this.props.memorials)
  }

  sortByDate () {
    console.log('sorting by date')
    this.props.sortByDate(this.props.memorials)
  }

  render () {
    return (
      <div className="content-panel">
        <h2>Memorial List</h2>
        <div className="memorial-list-container">
          <div className="sort-button-container">
            <button className="sort-button last-name-button"onClick={this.sortByLastName}>Sort By Last Name</button>
            <button className="sort-button date-button"onClick={this.sortByDate}>Sort By Date</button>
          </div>
          <ul className="memorials-list">
          {this.props.memorials.length !== 0 ? this.renderMemorials() : this.renderPlaceholder()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    memorials: state.memorials
  }
}


export default connect(mapStateToProps)(ContentPanel)
