import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import state from './store/state';
import mutations from './store/mutations';
import App from './App.vue';
import Home from './views/Home.vue';
import Settings from './views/Settings.vue';
import DetailedView from './views/DetailedView.vue';

import './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations,
});

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Home },
  { path: '/settings', component: Settings },
  { path: '/info/:symbol', name: 'info', component: DetailedView },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

app.$store.commit('resetState'); // initial state
