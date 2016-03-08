import {
  FETCH_USER,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  FETCH_TOKEN_SUCCESS
} from '../actions'

let token = ''
let user = null

try {
  token = window.localStorage.token
  user = JSON.parse(window.localStorage.user)
} catch (e) {
  // we're ok with this blowing up
}

const initialState = {
  data: user,
  token: token,
  error: null,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER: {
      return Object.assign({}, state, {
        loading: true
      })
    }
    case FETCH_USER_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })
    }
    case FETCH_USER_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        error: null
      })
    }
    case FETCH_TOKEN_SUCCESS: {
      return Object.assign({}, state, {
        token: action.payload
      })
    }
  }

  return state
}
