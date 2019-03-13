import { App } from '@vert/core'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'

import Layout from './layout/index.vue'
import { createRouter } from './router'
import { createStore } from './store'

import { GreetingService } from './service/greeting'
import { UserService } from './service/user'

initVue()
initService()

function initVue () {
  Vue.use(VueRouter)
  Vue.use(Vuex)
}

function initService () {
  App.addSingleton(GreetingService, UserService)
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
