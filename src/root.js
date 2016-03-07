import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './styles/main.styl'

render(<App url={window.location.pathname}/>, document.body.firstChild)
