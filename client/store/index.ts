import Vuex from 'vuex'

import { index } from './modules/index'
import { about } from './modules/about'

function createStore () {
  return new Vuex.Store({
    modules: {
      index,
      about
    }
  })
}

export {
  createStore
}
