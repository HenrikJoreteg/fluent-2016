import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './styles/main.styl'
import createStore from './store'
import { Provider } from 'react-redux'

const store = window.store = createStore()

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.body.firstChild
)
