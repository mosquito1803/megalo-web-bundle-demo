
import Router from  'vue-router'
import Vue from 'vue'
import page1 from '/workfiles/project/websiteInit2/src/views/index/index.vue'
import page2 from '/workfiles/project/websiteInit2/src/views/category/index.vue'
import page3 from '/workfiles/project/websiteInit2/src/components/PhIcon/__demo__/App.vue'
import page4 from '/workfiles/project/websiteInit2/src/components/PhList/__demo__/App.vue'
import page5 from '/workfiles/project/websiteInit2/src/components/uiButton/__demo__/App.vue'
    
const routes = [
{ path: '/views/index/index', component: page1 },
{ path: '/views/category/index', component: page2 },
{ path: '/components/PhIcon/__demo__/App', component: page3 },
{ path: '/components/PhList/__demo__/App', component: page4 },
{ path: '/components/uiButton/__demo__/App', component: page5 }
]    

Vue.use(Router);

const router = new Router({
    routes 
})
export default router
    