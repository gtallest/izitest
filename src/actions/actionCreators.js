import axios from 'axios'

export const RECEIVE_MEMORIALS = "RECEIVE_MEMORIALS"
export const SORT_MEMORIALS_BY_DATE = "SORT_MEMORIALS_BY_DATE"
export const SORT_MEMORIALS_BY_LAST_NAME = "SORT_MEMORIALS_BY_LAST_NAME"

function receiveMemorials (json) {
  return {
    type: RECEIVE_MEMORIALS,
    memorials: json.data.data.sort((a, b) => (a.creationDate < b.creationDate ? -1 : 1))
  }
}

export function sortMemorialsByDate (json) {
  return {
    type: SORT_MEMORIALS_BY_DATE,
    memorials: json.sort((a, b) => (a.creationDate < b.creationDate ? -1 : 1))
  }
}

// some Memorials are missing the name property, or parts of it (name.first, name.last)
// the sort function includes checks for these cases
export function sortMemorialsByLastName (json) {
  return {
    type: SORT_MEMORIALS_BY_LAST_NAME,
    memorials: json.sort((a, b) => {
      if(!a.name) {
        return 1
      } else {
        if(!a.name.last) {
            if(!b.name.last) {
              return a.name.first < b.name.first ? -1 : 1
            }
          return 1
        }
      }
      if(!b.name) {
        return -1
      } else {
        if(!b.name.last) {
            if(!a.name.last) {
                return a.name.first < b.name.first ? -1 : 1
              }
          return -1
        }
      }
      return a.name.last < b.name.last ? -1 : 1
    })
  }
}

export function fetchMemorials () {
  return dispatch => {
    return axios.get('https://dev.requiemapp.com/public/memorial/random')
      .then(response => dispatch(receiveMemorials(response)))
      .catch(error => console.log(error))
  }
}
