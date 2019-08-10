import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from './components/Search.vue';
import Profile from './components/Profile.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: Search
  },
  {
    path: '/profile/:platform/:gamertag',
    name: 'profile',
    component: Profile
  }
]

export default new VueRouter({
  mode: 'history',
  routes
});