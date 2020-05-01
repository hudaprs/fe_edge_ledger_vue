import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./components/Home.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})