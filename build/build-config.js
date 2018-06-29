const path = require('path')

const clientPort = 4000
const ssrPort = 5000

const distPath = rootResolve('./dist')

module.exports = {
  clientPort,
  ssrPort,
  distPath
}

function rootResolve (filePath) {
  return path.resolve(__dirname, '../', filePath)
}
