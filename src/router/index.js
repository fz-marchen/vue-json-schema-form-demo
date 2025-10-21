import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import About from '../views/About.vue'



// 路由规则配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home 
  },
  {
    path: '/about',
    name: 'About',
    component: About 
  }
]

// 创建路由实例
const router = new VueRouter({
  mode: 'hash',  // 路由模式：hash（带#）或 history（需后端配置）
  base: process.env.BASE_URL,
  routes
})

export default router