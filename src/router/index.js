import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Orders from '../views/Orders.vue';
import Account from '../views/Account.vue';
import Register from '../views/Register.vue';
import Favorites from '../views/Favorites.vue';

import Profile from '../components/account/Profile.vue';
import AddProfile from '../components/account/AddProfile.vue';

import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.state.auth.isAuthenticated) {
        next('/account');
      } else {
        next();
      }
    },
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    beforeEnter: (to, from, next) => {
      if (store.state.auth.isAuthenticated) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/account',
    component: Account,
    beforeEnter: (to, from, next) => {
      if (store.state.auth.isAuthenticated) {
        next();
      } else {
        next('/login');
      }
    },
    children: [
      { path: '/', component: Profile, name: 'profile' },
      { path: 'add-profile', component: AddProfile, name: 'add-profile' },
    ],
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (store.state.auth.isAuthenticated) {
        next('/account');
      } else {
        next();
      }
    },
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    beforeEnter: (to, from, next) => {
      if (store.state.auth.isAuthenticated) {
        next();
      } else {
        next('/login');
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
