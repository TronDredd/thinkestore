import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  //  redirect to Login component
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  }
]

const router = new VueRouter({
  routes
})

export default router
