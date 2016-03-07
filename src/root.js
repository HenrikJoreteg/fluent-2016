import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './styles/main.styl'
import createStore from './store'
import { Provider } from 'react-redux'
import { updateUrl } from './actions'

const store = window.store = createStore()

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
