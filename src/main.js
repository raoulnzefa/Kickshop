import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router';
import config from './firebase';
import { store } from './store/index';


new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
