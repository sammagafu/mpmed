import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'
import Accessibility from '../views/Accessibility.vue'
import Sitemap from '../views/Sitemap.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/terms', name: 'Terms', component: Terms },
  { path: '/accessibility', name: 'Accessibility', component: Accessibility },
  { path: '/sitemap', name: 'Sitemap', component: Sitemap },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth' })
        }, 100)
      })
    }
    return { top: 0 }
  },
})

export default router
