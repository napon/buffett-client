import Vue from 'vue';
import App from './App.vue';
import auth from './auth';
import store from './store';
import router from './router';
import './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(auth);

const app = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

app.$store.commit('resetState', app.$auth.buildUserSession()); // initial state
