import App from './App'
import Vue from 'vue'
import router from './router'

App.router = router;

const app = new Vue(App)

app.$mount("#app")

router.push({ name: 'index' });