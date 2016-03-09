import IS_BROWSER from './helpers/is-browser'

const config = {
  'localhost': {
    clientId: '34d32bcd940626d0d6f3'
  },
  'fluentconf.surge.sh': {
    clientId: 'c86baff14fb87615074e'
  }
}[IS_BROWSER && window.location.hostname]

export default config || {}
