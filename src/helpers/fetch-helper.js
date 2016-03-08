export default (url) => {
  const token = window.localStorage.token || ''
  const headers = {}

  if (url.slice(0, 1) === '/') {
    url = `https://api.github.com${url}`

    if (token) {
      headers.Authorization = `token ${token}`
    }
  }

  return fetch(url, {headers: headers})
    .then((response) => {
      if (response.status >= 400) {
        throw new Error(response.statusText)
      }
      if (response.status === 204) {
        return
      }
      return response.json()
    })
}
