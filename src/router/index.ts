import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import { routes } from './routes';
import { TransitionName } from '@/utils/enums';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

//  v1: beforeEach
router.beforeEach((to, _, next) => {
  const transition = to.meta.transition || TransitionName.Fade;
  store.commit('pages/setPage', transition);
  next();
});

export default router;
