import App from './my'
import Vue from 'vue'
import store from '../../store'
import { a, b } from '../../common/index'

App.store = store;

const app = new Vue(App)

app.$mount("#app")
console.log(a, b)