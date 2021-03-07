import Vue from 'vue';
import VueRouter from 'vue-router';
import RequestView from '../views/RequestView.vue';
import AdminView from '../views/AdminView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Request',
    component: RequestView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, routes,
})

export default router
