/* tslint:disable:ordered-imports */

import 'reflect-metadata'
import 'babel-polyfill'

import { createApp } from './app'

const { app, router, store } = createApp()

if (window['__INITIAL_STATE__']) {
  store.replaceState(window['__INITIAL_STATE__'])
}

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)

    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })

    if (!activated.length) {
      return next()
    }

    Promise.all(activated.map(Component => {
      const asyncDataFunc = Component['asyncData'] ||
        Component['extendOptions']['asyncData']

      if (typeof asyncDataFunc === 'function') {
        return asyncDataFunc({ store, route: to })
      }
    })).then(() => {
      next()
    }).catch(next)
  })

  app.$mount('#app')
})
