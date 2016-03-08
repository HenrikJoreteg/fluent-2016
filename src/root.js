import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './styles/main.styl'
import createStore from './store'
import { Provider } from 'react-redux'
import { updateUrl, fetchTokenAndUser } from './actions'
import qs from 'query-string'

const store = window.store = createStore()

if (window.location.pathname === '/auth/callback') {
  const query = qs.parse(window.location.search)
  store.dispatch(fetchTokenAndUser(query.code))
}

const setCurrentUrl = () => {
  store.dispatch(updateUrl(window.location.pathname))
}
if (window.location.pathname !== store.getState().route.url) {
  setCurrentUrl()
}
window.addEventListener('popstate', setCurrentUrl)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.body.firstChild
)
