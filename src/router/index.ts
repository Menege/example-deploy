import { createRouter, createWebHistory } from 'vue-router'
import type { CocktailCode } from '../types/cocktail'
import CocktailPage from '../pages/CocktailPage.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory('/example-deploy/'),
  routes: [
    {
      path: '/',
      redirect: '/cocktail/margarita'
    },
    {
      path: '/cocktail',
      redirect: '/cocktail/margarita'
    },
    {
      path: '/cocktail/:cocktail',
      name: 'cocktail',
      component: CocktailPage,
      beforeEnter: (to) => {
        const validCodes: CocktailCode[] = ['margarita', 'mojito', 'a1', 'kir']
        if (!validCodes.includes(to.params.cocktail as CocktailCode)) {
          return { name: 'not-found' }
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router 