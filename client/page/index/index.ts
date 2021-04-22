import { Component } from '@vert/core'
import Vue from 'vue'

import { GreetingService } from '../../service/greeting'
import { IUser, UserService } from '../../service/user'

@Component
export default class AppIndex extends Vue {
  pageName: string = ''

  private get userList (): IUser[] {
    return this.$store.getters['index/userList']
  }

  private async asyncData ({ store, to }) {
    const userList = await UserService.getUserList()
    return store.commit('index/setUserList', userList)
  }

  private created () {
    GreetingService.greet('Index')
  }
}
