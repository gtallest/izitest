import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMemorials, sortMemorialsByDate, sortMemorialsByLastName } from '../actions/actionCreators'

import ContentPanel from './ContentPanel'

class ContentContainer extends Component {

  render () {
    return (
      <ContentPanel />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortByLastName: (memorials) => {dispatch(sortMemorialsByLastName(memorials))},
    sortByDate: (memorials) => {dispatch(sortMemorialsByDate(memorials))},
  }
}

function mapStateToProps(state) {
  return {
    memorials: state.memorials
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContentPanel)
