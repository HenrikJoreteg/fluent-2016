var getConfig = require('hjs-webpack')
var renderPage = require('./server-render')

module.exports = getConfig({
  in: 'src/root.js',
  out: 'public',
  clearBeforeBuild: '!(images|static)',
  serveCustomHtmlInDev: false,
  html: function (context) {
    return {
      'index.html': context.defaultTemplate({ html: renderPage('/') }),
      '200.html': context.defaultTemplate({ html: renderPage('/watched-repos') })
    }
  }
})
