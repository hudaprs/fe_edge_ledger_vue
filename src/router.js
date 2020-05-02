import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      isHome: true
    },
    component: () => import('./components/Home.vue')
  },
  {
    path: '/home',
    name: 'secondHome',
    meta: {
      isHome: true
    },
    component: () => import('./components/Home.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      isHome: false
    },
    component: () => import('./components/pages/Blog.vue')
  },
  {
    path: '/blog/post',
    name: 'post',
    meta: {
      isHome: false
    },
    component: () => import('./components/pages/Post.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})