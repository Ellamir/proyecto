import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
//import './registerServiceWorker';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/css/bootstrap-vue.css';

import firebase from 'firebase';
import { firebaseConfig } from "./config/firebaseConfig";

import 'bootstrap';
import 'bootstrap-vue';


firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
