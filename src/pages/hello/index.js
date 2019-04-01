import App from './hello'
import Vue from 'vue'
import store from '../../store'

App.store = store;

const app = new Vue(App)

app.$mount("#app")
