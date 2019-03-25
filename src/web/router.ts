import Vue from 'vue'
import Router from  'vue-router'
import components from '@/common/components/';
import '@/modules/css/reset.scss';
import PHEMEUI from '@olympus-test/main';
import hd from '@/components/ComponentsHeader/src/ComponentsHeader.vue';

// 挂在router
Vue.use(Router);

// 挂载所有的基础组件库组件
Object.entries(PHEMEUI).forEach((val: any) => {
  Vue.use(val[1])
});

const  routes:object[] = [];

// 挂在所有当前组件库所有的组件分类路由
routes.push({
  name: 'category',
  path: "/pages/category/",
  components: {
    hd : hd,
    bd : require('../views/category/index.vue').default
  }
});

// 挂在所有当前组件库所有的组件路由
Object.entries(components).forEach((val: any) => {
  let _key = val[0];
  routes.push({
    name: _key,
    path: "/pages/components/"+ _key, 
    components: {
      hd : hd,
      bd : require("../common/components/"+ _key +"/__demo__/App.vue").default
    }
  });
  

});

const router = new Router({
  routes : Array.prototype.concat(routes,[
    { 
      name: 'index',
      path: '/pages/index',
      components: {
        bd : require('../views/index/index.vue').default
      } 
    }
  ])
});

export default router