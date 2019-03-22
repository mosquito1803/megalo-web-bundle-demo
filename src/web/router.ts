import Router from  'vue-router'
import Vue from 'vue'
import Index from '../views/index/index.vue'
import components from '../common/components/';

Vue.use(Router);

const routes = [
  { name: 'index', path: '/pages/index/index', component: Index }
]

Object.entries(components).forEach((val: any) => {
  let _key = val[0],
    _val = val[1];

  routes.push({
    name: _key,
    path: '/component/' + _key,
    component: require('../common/components/'+ _key +'/__demo__/App.vue').default
  });
});

const router = new Router({
  routes 
})

export default router