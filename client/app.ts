import { App } from '@vert/core'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'

import { createRouter } from './router'
import { createStore } from './store'

import Layout from './layout/index.vue'

initVue()

function initVue () {
  Vue.use(VueRouter)
  Vue.use(Vuex)
}

function createApp () {
  const router = createRouter()
  const store = createStore()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(Layout)
  })

  return {
    app,
    router,
    store
  }
}

export {
  createApp
}
