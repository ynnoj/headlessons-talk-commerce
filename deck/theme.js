import { themes } from 'mdx-deck'

export default {
  ...themes.future,
  styles: {
    img: {
      margin: '0 auto'
    },
    h1: {
      lineHeight: '1',
      margin: '0 0 1rem'
    },
    h2: {
      color: 'white'
    },
    p: {
      color: '#999',
      margin: '0'
    }
  },
  colors: {
    background: '#161924',
    code: '#FB1488',
    text: 'white'
  }
}
