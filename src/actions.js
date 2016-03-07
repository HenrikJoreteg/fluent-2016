import qs from 'query-string'

export const UPDATE_URL = 'UPDATE_URL'
export const updateUrl = (url) => {
  return { type: UPDATE_URL, payload: url }
}

// DO_LOGIN
export const DO_LOGIN = 'DO_LOGIN'
export const doLogin = () => {
  const loginUrl = 'https://github.com/login/oauth/authorize?' + qs.stringify({
    client_id: '34d32bcd940626d0d6f3',
    redirect_uri: `${window.location.origin}/auth/callback`,
    scope: 'user,repo'
  })

  window.location = loginUrl

  // return { type: DO_LOGIN }
}

// FETCH_TOKEN
export const FETCH_TOKEN = 'FETCH_TOKEN'
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS'
export const FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR'
export const fetchToken = (code) => {
  const clientId = '34d32bcd940626d0d6f3'

  return (dispatch) => {
    dispatch({ type: FETCH_TOKEN })
    fetch(`https://github-secret-keeper.herokuapp.com/${clientId}/${code}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then((data) => {
        const token = window.localStorage.token = data.access_token
        dispatch({ type: FETCH_TOKEN_SUCCESS, payload: token })
      })
      .catch((error) => {
        dispatch({ type: FETCH_TOKEN_ERROR, error })
      })
  }
}
