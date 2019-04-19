import { Component } from 'vue-class-decorator';

declare module "megalo/types/vue" {
  interface Vue {
    $mp: any
  }
}

Component.registerHooks([
  'onShow',
  'onHide',
  'onShareAppMessage',
  'onReachBottom',
  'onPullDownRefresh'
])
