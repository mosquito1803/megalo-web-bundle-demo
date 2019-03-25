import Vue from 'vue'
import router from './router'
import App from './app.vue'

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

// router.push({ name: 'index' });