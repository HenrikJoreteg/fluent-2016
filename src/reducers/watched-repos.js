import {
  FETCH_WATCHED_REPOS,
  FETCH_WATCHED_REPOS_SUCCESS,
  FETCH_WATCHED_REPOS_ERROR
} from '../actions'

const initialState = {
  data: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WATCHED_REPOS: {
      return Object.assign({}, state, {
        loading: true
      })
    }
    case FETCH_WATCHED_REPOS_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        error: null
      })
    }
    case FETCH_WATCHED_REPOS_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })
    }
  }

  return state
}
