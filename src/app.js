import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(VHtmlPlugin)
const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/hello/index',
      'pages/test/index'
    ],
    subPackages: [
      {
        root: '',
        pages: ['pages/my/index', 'pages/new/index']
      }
    ],
    tabBar: {
      color: '#333',
      selectedColor: '#007d37',
      list: [
        {
          pagePath: 'pages/my/index',
          text: 'my',
          iconPath: 'assets/image/home.png',
          selectedIconPath: 'assets/image/home_on.png',
        },
        {
          pagePath: 'pages/hello/index',
          text: 'hello',
          iconPath: 'assets/image/mine.png',
          selectedIconPath: 'assets/image/mine_on.png',
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'megalo-frame',
      navigationBarTextStyle: 'black'
    }
  }
}
