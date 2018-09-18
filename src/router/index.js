import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Unauthenticated from '../views/Unauthenticated.vue';
import Callback from '../views/Callback.vue';
import Settings from '../views/Settings.vue';
import DetailedView from '../views/DetailedView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Unauthenticated },
  { path: '/callback', component: Callback },
  { path: '/settings', component: Settings },
  { path: '/info/:symbol', name: 'info', component: DetailedView },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const publicPaths = ['/login', '/callback'];
router.beforeEach((to, from, next) => {
  const { app } = router;
  app.$store.commit('setUserSession', app.$auth.buildUserSession());
  if (publicPaths.indexOf(to.path) !== -1 || app.$auth.isAuthenticated()) {
    next();
  } else {
    next('/login');
  }
});

export default router;
