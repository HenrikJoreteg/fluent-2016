import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './styles/main.styl'
import createStore from './store'

const store = window.store = createStore()

render(<App url={window.location.pathname}/>, document.body.firstChild)
