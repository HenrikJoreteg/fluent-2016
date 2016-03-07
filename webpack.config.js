var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/root.js',
  out: 'public',
  clearBeforeBuild: '!(images|static)'
})
