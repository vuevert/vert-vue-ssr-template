import { AppComponent, Component } from '@vert/core'

@Component
export default class AboutPage extends AppComponent {
  oldSaying: string = 'Nothing here but blank.'

  async asyncData () {
    console.log('Wow')
    await sleep(1000)
    console.log('Wow 2')
    return {
      oldSaying: 'Fa'g
    }
  }
}

function sleep (time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
