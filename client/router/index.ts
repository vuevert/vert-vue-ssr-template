import Router from 'vue-router'

function createRouter () {
  return new Router({
    mode: 'history',
    fallback: true,
    routes: [
      { path: '/', component: () => import('../page/index/index.vue') },
      { path: '/about', component: () => import('../page/about/index.vue') }
    ]
  })
}

export {
  createRouter
}
