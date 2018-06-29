const path = require('path')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')

const clientManifest = require('../dist/vue-ssr-client-manifest.json')
const bundle = require('../dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf-8')

const renderer = createBundleRenderer(bundle, {
  template,
  clientManifest
})

module.exports = async function handler (ctx) {
  const context = {
    url: ctx.path
  }

  try {
    ctx.body = await renderer.renderToString(context)
  } catch (error) {
    ctx.body = error
  }
}
