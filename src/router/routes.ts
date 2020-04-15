import Home from '@/views/Home.vue';
import { RouteName, TransitionName, NavClass } from '@/utils/enums';

export const routes = [
  {
    path: '/',
    name: RouteName.Home,
    component: Home,
    meta: {
      transition: TransitionName.Fade,
    },
  },
  {
    path: '/about',
    name: RouteName.About,
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      transition: TransitionName.SlideLeft,
      navClass: NavClass.Dense,
    },
  },
  {
    path: '/contact',
    name: RouteName.Contact,
    component: () =>
      import(/* webpackChunkName: "contact" */ '@/views/Contact.vue'),
    meta: {
      transition: TransitionName.SlideRight,
      navClass: NavClass.Dark,
    },
  },
];
