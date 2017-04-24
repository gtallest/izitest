import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/memorials'

export default function store (initialState = {}) {

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware
      )
    )

  return store
}
