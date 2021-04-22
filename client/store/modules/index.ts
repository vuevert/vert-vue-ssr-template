// Copyright (c) 2021 LancerComet
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { IUser } from '../../service/user'

const index = {
  namespaced: true,

  state (): IIndexState {
    return {
      userList: []
    }
  },

  mutations: {
    setUserList (state: IIndexState, payload: IUser[]) {
      state.userList = payload
    }
  },

  getters: {
    userList (state: IIndexState) {
      return state.userList
    }
  }
}

export {
  index
}

interface IIndexState {
  userList: IUser[]
}
