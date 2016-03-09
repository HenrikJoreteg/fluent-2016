import qs from 'query-string'
import fetchHelper from './helpers/fetch-helper'
import config from './config'

export const UPDATE_URL = 'UPDATE_URL'
export const updateUrl = (url, options) => {
  if (options && options.replace) {
    window.history.replaceState({}, null, url)
  }
  return { type: UPDATE_URL, payload: url }
}

// DO_LOGIN
export const DO_LOGIN = 'DO_LOGIN'
export const doLogin = () => {
  return (dispatch, getState) => {
    const loginUrl = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: config.clientId,
      redirect_uri: `${window.location.origin}/auth/callback`,
      scope: 'user,repo'
    })

    dispatch({ type: DO_LOGIN, url: loginUrl })

    window.location = loginUrl
  }
}

export const DO_LOGOUT = 'DO_LOGOUT'
export const doLogout = () => {
  return (dispatch) => {
    dispatch({ type: DO_LOGOUT })
    window.localStorage.clear()
    window.location = '/'
  }
}

// FETCH_TOKEN
export const FETCH_TOKEN = 'FETCH_TOKEN'
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS'
export const FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR'
export const fetchTokenAndUser = (code) => {
  return (dispatch) => {
    dispatch({ type: FETCH_TOKEN })
    fetchHelper(`https://github-secret-keeper.herokuapp.com/${config.clientId}/${code}`)
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
        window.localStorage.user = JSON.stringify(data, null, 2)
        dispatch({ type: FETCH_USER_SUCCESS, payload: data })
      })
      .catch((error) => {
        dispatch({ type: FETCH_USER_ERROR, error })
      })
  }
}

// FETCH_WATCHED_REPOS
export const FETCH_WATCHED_REPOS = 'FETCH_WATCHED_REPOS'
export const FETCH_WATCHED_REPOS_SUCCESS = 'FETCH_WATCHED_REPOS_SUCCESS'
export const FETCH_WATCHED_REPOS_ERROR = 'FETCH_WATCHED_REPOS_ERROR'
export const fetchWatchedRepos = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_WATCHED_REPOS })
    fetchHelper('/user/subscriptions')
      .then((data) => {
        dispatch({ type: FETCH_WATCHED_REPOS_SUCCESS, payload: data })
      })
      .catch((error) => {
        dispatch({ type: FETCH_WATCHED_REPOS_ERROR, error })
      })
  }
}
