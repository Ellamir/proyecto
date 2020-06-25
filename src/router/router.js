import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase';   

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
    component: () => import('../views/Access.vue'),
    meta: {
      login: false
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      login: false
    }
  },
  {
    path: '/ana',
    name: 'Ana',
    component: () => import('../views/Ana.vue'),
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
    meta: {
      login: true
    }
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;

  let authRequired = to.matched.some(route => route.meta.login);

  if (!user && authRequired) {
    next('access');
  } else {
    next();
  }
});

export default router