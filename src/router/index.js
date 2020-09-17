import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Orders from '../views/Orders.vue';
import Account from '../views/Account.vue';
import Register from '../views/Register.vue';
import Favorites from '../views/Favorites.vue';

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
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
