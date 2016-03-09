require('babel-core/register')
var ReactDOM = require('react-dom/server')
var serverRoot = require('./src/server-root').default

var renderPage = function (url) {
  var element = serverRoot({route: {url: url}})
  return '<div id="root">' + ReactDOM.renderToString(element) + '</div>'
}

module.exports = renderPage
