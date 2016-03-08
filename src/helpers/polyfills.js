export default (cb) => {
  ensurePromise(() => {
    ensureFetch(cb)
  })
}

const ensurePromise = (cb) => {
  if (!window.Promise) {
    require.ensure([], (require) => {
      require('imports?this=>window!es6-promise')
      cb()
    })
  } else {
    cb()
  }
}

const ensureFetch = (cb) => {
  if (!window.fetch) {
    require.ensure([], (require) => {
      require('whatwg-fetch')
      cb()
    })
  } else {
    cb()
  }
}
