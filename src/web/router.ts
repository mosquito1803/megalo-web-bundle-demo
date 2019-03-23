import Vue from 'vue'
import Router from  'vue-router'
import components from '../common/components/';
import '../modules/css/reset.scss';
import hd from '../components/ComponentsHeader/src/ComponentsHeader';

import PHEMEUI from '@olympus-test/main';

Object.entries(PHEMEUI).forEach((val: any) => {
  Vue.use(val[1])
});

Vue.use(Router);

const  routes:object[] = [];

Object.entries(components).forEach((val: any) => {
  let _key = val[0];

  routes.push({
    name: _key,
    path: "pages/"+ _key +"/index", 
    components: {
      default : require('../common/components/'+ _key +'/__demo__/App.vue').default,
      hd : hd,
      bd : require('../common/components/'+ _key +'/__demo__/App.vue').default
    }
  });
});

const router = new Router({
  routes : Array.prototype.concat(routes,[
    { 
      name: 'index',
      path: '/pages/index/index',
      components: {
        hd : hd,
        bd : require('../views/index/index.vue').default
      } 
    }
  ])
});

export default router