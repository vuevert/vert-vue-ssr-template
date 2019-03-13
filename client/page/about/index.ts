import { Component } from '@vert/core'
import Vue from 'vue'

@Component
export default class AboutPage extends Vue {
  private isLoading: boolean = false

  async asyncData ({ store, route }) {
    console.log('AsyncData in about page is called.')
    await store.dispatch(
      'about/setOldSaying',
      `${route.params.name}: The quick brown fox jumps over the lazy dog.`
    )

    console.log('asyncData loaded.')
  }

  get oldSaying (): string {
    return this.$store.getters['about/oldSaying']
  }

  changeOldSaying () {
    this.$store.dispatch('about/setOldSaying', 'Nothing but tricks.')
  }
}
