import Vue from 'vue'

declare module 'vue/types/vue' {
  interface VueConstructor {
    install: (vue: any, options: any) => void
    router: any
  }
}
