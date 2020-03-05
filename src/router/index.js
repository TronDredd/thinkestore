import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main'
import Login from '../views/Login'
import SideBar from '../views/main/SideBar'
import Header from "../views/main/Header";
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
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: '',
        components: {
          'v-sidebar': SideBar,
          'v-header': Header
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
