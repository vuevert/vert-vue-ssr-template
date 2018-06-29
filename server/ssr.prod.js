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
  ctx.type = 'html'

  const context = {
    url: ctx.path
  }

  try {
    const htmlString = await renderer.renderToString(context)
    ctx.body = htmlString
  } catch (error) {
    console.error('[Error] SSR render error:', error)
    ctx.body = error.message || 'SSR unknown renderer error'
  }
}
