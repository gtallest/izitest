import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import ContentContainer from './ContentContainer'
import Footer from './Footer'

import '../styles/scss/main.scss';

class App extends Component {

  render () {
    return (
      <div>
        <Header />
        <ContentContainer />
        <Footer />
      </div>
    )
  }
}


export default App
