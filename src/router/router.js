import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import firebase from 'firebase';   cuando le active la opcion o sino habra q reemplazar por vuex para usar state

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
    component: () => import('../views/Tam.vue'),
  },
  {
    path: '/search-results',
    name: 'SearchResults',
    component: () => import('../views/SearchResults.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
  },

  //  {                               Así deberia ser el flujo al apretar el perfil de usuario pero no funca
  //   path: '/perfil',
  //    component: () => import('../views/Perfil.vue'),
  //    beforeEnter: (to, from, next) => {
  //     if (firebase.auth().currentUser) next({ name: 'Perfil' })
  //     else next({ name: 'Access' })
  //    }
  //  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
