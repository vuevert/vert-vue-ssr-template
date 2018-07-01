import { AppComponent, Component } from '@vert/core'

@Component
export default class AboutPage extends AppComponent {
  asyncData ({ store }) {
    return store.dispatch('about/setOldSaying', 'The quick brown fox jumps over the lazy dog.')
  }

  get oldSaying (): string {
    return this.$store.getters['about/oldSaying']
  }

  changeOldSaying () {
    this.$store.dispatch('about/setOldSaying', 'Nothing but tricks.')
  }
}

function sleep (time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
