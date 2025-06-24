import { defineStore } from 'pinia'
import type { Cocktail, CocktailCode, CocktailsResponse } from '../types/cocktail'

interface State {
  cocktails: Record<CocktailCode, Cocktail[]>
  loading: boolean
  error: string | null
}

export const useCocktailsStore = defineStore('cocktails', {
  state: (): State => ({
    cocktails: {
      margarita: [],
      mojito: [],
      a1: [],
      kir: []
    },
    loading: false,
    error: null
  }),

  getters: {
    getCocktailsByCode: (state) => (code: CocktailCode): Cocktail[] => {
      return state.cocktails[code] || []
    }
  },

  actions: {
    async fetchCocktails(code: CocktailCode) {
      if (this.cocktails[code].length > 0) {
        return this.cocktails[code]
      }

      this.loading = true
      this.error = null

      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        
        const data: CocktailsResponse = await response.json()

        if (data.drinks) {
          this.cocktails[code] = data.drinks
          return data.drinks
        } else {
          throw new Error('No cocktails found')
        }
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch cocktails'
        return []
      } finally {
        this.loading = false
      }
    }
  }
}) 