import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const debugLogger = (store) => (next) => (action) => {
  console.groupCollapsed(action.type)
  console.info('action:', action)

  const result = next(action)

  console.debug('state:', store.getState())
  console.groupEnd(action.type)

  return result
}

export default (initialState) => {
  const createStoreWithMiddleWare = compose(
    applyMiddleware(thunk, debugLogger),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore)

  return createStoreWithMiddleWare(rootReducer, initialState)
}
