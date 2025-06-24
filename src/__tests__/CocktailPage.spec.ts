import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createRouter, createWebHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import CocktailPage from '../pages/CocktailPage.vue'
import { useCocktailsStore } from '../store/cocktails'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/cocktail/:cocktail', component: CocktailPage }]
})

describe('CocktailPage', () => {
  const mountComponent = (initialState = {}) => {
    return mount(CocktailPage, {
      global: {
        plugins: [
          router,
          PrimeVue,
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              cocktails: {
                loading: false,
                error: null,
                cocktails: {},
                ...initialState
              }
            }
          })
        ]
      }
    })
  }

  beforeEach(() => {
    router.push('/cocktail/margarita')
  })

  it('displays loading state', () => {
    const wrapper = mountComponent({ loading: true })
    expect(wrapper.findComponent({ name: 'ProgressSpinner' }).exists()).toBe(true)
  })

  it('displays error state', () => {
    const wrapper = mountComponent({
      loading: false,
      error: 'Failed to fetch'
    })
    const message = wrapper.findComponent({ name: 'Message' })
    expect(message.exists()).toBe(true)
    expect(message.props('severity')).toBe('error')
    expect(message.text()).toContain('Failed to fetch')
  })

  it('displays empty state', () => {
    const wrapper = mountComponent({
      loading: false,
      cocktails: { margarita: [] }
    })
    const message = wrapper.findComponent({ name: 'Message' })
    expect(message.exists()).toBe(true)
    expect(message.props('severity')).toBe('info')
    expect(message.text()).toContain('No cocktails found')
  })

  it('displays cocktail info', () => {
    const wrapper = mountComponent({
      loading: false,
      cocktails: {
        margarita: [
          {
            idDrink: '1',
            strDrink: 'Margarita',
            strCategory: 'Cocktail',
            strGlass: 'Cocktail glass',
            strInstructions: 'Mix ingredients',
            strDrinkThumb: 'image.jpg',
            strIngredient1: 'Tequila',
            strMeasure1: '2 oz',
            strIngredient2: 'Lime Juice',
            strMeasure2: '1 oz'
          }
        ]
      }
    })
    expect(wrapper.text()).toContain('Margarita')
    expect(wrapper.text()).toContain('Cocktail')
    expect(wrapper.text()).toContain('Cocktail glass')
    expect(wrapper.text()).toContain('Mix ingredients')
    expect(wrapper.text()).toContain('Tequila')
    expect(wrapper.text()).toContain('2 oz')
    expect(wrapper.text()).toContain('Lime Juice')
    expect(wrapper.text()).toContain('1 oz')
    expect(wrapper.find('img').attributes('src')).toBe('image.jpg')
  })

  it('fetches cocktails on mount', () => {
    mountComponent()
    const store = useCocktailsStore()
    expect(store.fetchCocktails).toHaveBeenCalledWith('margarita')
  })
}) 