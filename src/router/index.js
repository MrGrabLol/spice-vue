import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/customer-page',
    name: 'CP',
    component: () => import('../pages/CustomerPage.vue'), 
    children: [{
        path: 'about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'models',
        name: 'Models',
        component: () => import('../views/ModelsView.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/OrderView.vue')
      },
      {
      path: 'home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
      }]
  },
  {
    path: '/admin-page',
    name: 'Admin',
    component: () => import('../views/AdminView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router