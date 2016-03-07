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
