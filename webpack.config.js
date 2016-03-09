var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/root.js',
  out: 'public',
  clearBeforeBuild: '!(images|static)',
  serveCustomHtmlInDev: false,
  html: function (context) {
    return {
      '200.html': context.defaultTemplate()
    }
  }
})
