const path = require('path')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')

const bundle = require('../dist/vue-ssr-server-bundle.json')
const renderer = createBundleRenderer(bundle, {
  template: fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf-8'),
  clientManifest: require('../dist/vue-ssr-client-manifest.json')
})

module.exports = async function handler (ctx) {
  const context = {
    url: ctx.path,
    title: '@Vert/Vue-SSR-Template'
  }

  try {
    ctx.body = await renderer.renderToString(context)
  } catch (error) {
    ctx.body = error
  }
}
