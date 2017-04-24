import { combineReducers } from 'redux'
import {
  RECEIVE_MEMORIALS,
  SORT_MEMORIALS_BY_DATE,
  SORT_MEMORIALS_BY_LAST_NAME } from '../actions/actionCreators'

function memorials(state = [], action) {
  switch(action.type) {
    case RECEIVE_MEMORIALS:
      return [ ...action.memorials]
    case SORT_MEMORIALS_BY_DATE:
      return [ ...action.memorials ]
    case SORT_MEMORIALS_BY_LAST_NAME:
      return [ ...action.memorials ]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  memorials
})

export default rootReducer
