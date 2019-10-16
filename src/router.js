import Car from '@/views/Car';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'car',
      component: Car
    },
    { path: '*', redirect: '/' }
  ]
});
