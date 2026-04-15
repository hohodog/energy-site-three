import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const Sodium = () => import('../views/Sodium.vue')
const Supercapacitor = () => import('../views/Supercapacitor.vue')
const Redox = () => import('../views/Redox.vue')
const SolidState = () => import('../views/SolidState.vue')
const AboutView = () => import('../views/AboutView.vue')
const ContactView = () => import('../views/ContactView.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/sodium', component: Sodium },
  { path: '/supercapacitor', component: Supercapacitor },
  { path: '/redox', component: Redox },
  { path: '/solid', component: SolidState },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
]

const scrollBehavior = (to) => {
  if (to.hash) {
    return {
      el: to.hash,
      top: 108,
      behavior: 'smooth',
    }
  }

  return { top: 0 }
}

export function createAppRouter(history = createWebHistory()) {
  return createRouter({
    history,
    routes,
    scrollBehavior,
  })
}
