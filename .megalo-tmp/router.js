
import Router from  'vue-router'
import Vue from 'vue'
import page1 from '/workfiles/test/megalo-h5-demo/src/pages/hello.vue'
import page2 from '/workfiles/test/megalo-h5-demo/src/pages/my/my.vue'
    
const routes = [
{ path: '/pages/hello', component: page1 },
{ path: '/pages/my/my', component: page2 }
]    

Vue.use(Router);

const router = new Router({
    routes 
})
export default router
    