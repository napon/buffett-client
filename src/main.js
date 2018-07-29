import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Settings from './views/Settings.vue';

import './plugins/vuetify';

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/settings', component: Settings },
];

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
