import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/select',
    name: 'Select',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Select.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/offers',
    name: 'HomePost',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePost.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) {
        next("/login");
      } else {
        next();
      }
    }
  },
  {
    path: '/single/:id',
    name: 'Single',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Single.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) {
        next("/login");
      } else {
        next();
      }
    }
  },
  {
    path: '/postoffer',
    name: 'PostOffer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PostOffer.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) {
        next("/login");
      } else {
        next();
      }
    }
  },
  {
    path: '/account',
    name: 'Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('token')) {
        next("/login");
      } else {
        next();
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
