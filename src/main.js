import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import firebase from 'firebase';
import { firebaseConfig } from "./config/firebaseConfig";
import 'bootstrap';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
