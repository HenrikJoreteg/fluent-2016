import qs from 'query-string'
import fetchHelper from './helpers/fetch-helper'

export const UPDATE_URL = 'UPDATE_URL'
export const updateUrl = (url) => {
  return { type: UPDATE_URL, payload: url }
}

// DO_LOGIN
export const DO_LOGIN = 'DO_LOGIN'
export const doLogin = () => {
  return (dispatch) => {
    const loginUrl = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '34d32bcd940626d0d6f3',
      redirect_uri: `${window.location.origin}/auth/callback`,
      scope: 'user,repo'
    })

    dispatch({ type: DO_LOGIN, url: loginUrl })

    window.location = loginUrl
  }
}

// FETCH_TOKEN
export const FETCH_TOKEN = 'FETCH_TOKEN'
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS'
export const FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR'
export const fetchTokenAndUser = (code) => {
  const clientId = '34d32bcd940626d0d6f3'

  return (dispatch) => {
    dispatch({ type: FETCH_TOKEN })
    fetchHelper(`https://github-secret-keeper.herokuapp.com/${clientId}/${code}`)
      .then((data) => {
        const token = window.localStorage.token = data.access_token
        dispatch({ type: FETCH_TOKEN_SUCCESS, payload: token })
      })
      .catch((error) => {
        dispatch({ type: FETCH_TOKEN_ERROR, error })
      })
      .then(() => {
        dispatch(fetchUser())
      })
  }
}

// FETCH_USER
export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'
export const fetchUser = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER })
    fetchHelper('/user')
      .then((data) => {
        dispatch({ type: FETCH_USER_SUCCESS, payload: data })
      })
      .catch((error) => {
        dispatch({ type: FETCH_USER_ERROR, error })
      })
  }
}
