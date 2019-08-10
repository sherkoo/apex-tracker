import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from './components/Search.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Search
  },
  {
    path: '/test',
    component: Search
  }
]

export default new VueRouter({
  mode: 'history',
  routes
});