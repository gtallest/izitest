import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMemorials, sortMemorialsByDate, sortMemorialsByLastName } from '../actions/actionCreators'

import Header from './Header'
import ContentPanel from './ContentPanel'
import Footer from './Footer'
import Main from './Main'

import '../styles/scss/main.scss';

class App extends Component {

  render () {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}


export default App
