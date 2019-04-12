import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(VHtmlPlugin)
const app = new Vue(App)

app.$mount()

export default {
  config: {
    pages: [
      'views/index/index',
      'views/category/index',
      'components/PhIcon/__demo__/App',
      'components/PhList/__demo__/App',
      'components/uiButton/__demo__/App'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'megalo-demo',
      navigationBarTextStyle: 'black'
    }
  }
}
