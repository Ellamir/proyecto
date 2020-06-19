import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/access',
    name: 'Access',
    component: () => import('../views/Access.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
   path: '/ana',
    name: 'Ana',
    component: () => import('../views/Ana.vue')
  },
  {
    path: '/tam',
     name: 'Tam',
     component: () => import('../views/Tam.vue')
   },
  // {
  //   path: '/registro',
  //   name: 'Registro',
  //   component: () => import('../components/Registro.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
