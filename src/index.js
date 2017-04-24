import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { render } from 'react-dom'

import App from './components/App'

const baseStore = store()

class Root extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Provider store={baseStore}>
        <App />
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('app'))
