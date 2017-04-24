import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="header">
        <img className="header-logo" src="public/images/everdays-logo.png" />
        <span className="header-subtitle"> Everdays Coding Project by Marc Wong</span>
      </div>
    )
  }
}

export default Header
