var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/root.js',
  out: 'public',
  clearBeforeBuild: '!(images|static)',
  serveCustomHtmlInDev: false,
  html: function (context) {
    var renderPage = require('./server-render')
    return {
      'index.html': context.defaultTemplate({ html: renderPage('/') }),
      '200.html': context.defaultTemplate({ html: renderPage('/watched-repos') })
    }
  }
})
