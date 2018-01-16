import Vue from 'vue';
import Router from 'vue-router';
import main from '@/components/main-view';
import forderTag from '@/components/forder-tag';
import defaultContent from '@/components/default-content';
import mainContent from '@/components/main-content';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'forder-main',
      component: main,
    },
    {
      path: '/tag',
      name: 'tag',
      component: forderTag,
    },
    {
      path: '/default',
      name: 'default',
      component: defaultContent,
    },
    {
      path: '/main',
      name: main,
      component: mainContent,
    },
  ],
});
