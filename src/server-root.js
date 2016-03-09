import React from 'react'
import { Provider } from 'react-redux'
import App from './app'
import initStore from './store'

export default (data) => {
  const store = initStore(data)
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
