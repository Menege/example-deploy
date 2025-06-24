<template>
  <CocktailLayout>
    <CocktailMenu :codes="cocktailCodes" v-model="selectedCode" />
    <div class="cocktail-content">
      <div class="cocktail-card-wide">
        <Transition name="fade-slide" mode="out-in">
          <LoaderMessage :loading="loading" :error="error || undefined" :empty-message="!cocktail ? 'No cocktails found' : undefined">
            <CocktailCard v-if="cocktail" :key="cocktail.idDrink" :cocktail="cocktail" :ingredients="ingredientRows" />
          </LoaderMessage>
        </Transition>
      </div>
    </div>
  </CocktailLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCocktailsStore } from '../store/cocktails'
import type { CocktailCode } from '../types/cocktail'
import CocktailMenu from '../components/CocktailMenu.vue'
import CocktailCard from '../components/CocktailCard.vue'
import CocktailLayout from '../components/CocktailLayout.vue'
import LoaderMessage from '../components/LoaderMessage.vue'

const route = useRoute()
const router = useRouter()
const store = useCocktailsStore()
const { loading, error } = storeToRefs(store)

const cocktailCodes: CocktailCode[] = ['margarita', 'mojito', 'a1', 'kir']
const selectedCode = ref((route.params.cocktail as CocktailCode) || 'margarita')
const cocktailCode = computed(() => selectedCode.value)
const cocktails = computed(() => store.getCocktailsByCode(cocktailCode.value))
const cocktail = computed(() => cocktails.value && cocktails.value.length ? cocktails.value[0] : null)

const fetchData = async () => {
  await store.fetchCocktails(cocktailCode.value)
}

watch(() => route.params.cocktail, () => {
  selectedCode.value = (route.params.cocktail as CocktailCode) || 'margarita'
  fetchData()
}, { immediate: true })
watch(selectedCode, (val) => {
  if (val !== route.params.cocktail) {
    router.push(`/cocktail/${val}`)
  }
})

const ingredientRows = computed(() => {
  if (!cocktail.value) return []
  const rows = []
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail.value[`strIngredient${i}`]
    const measure = cocktail.value[`strMeasure${i}`]
    if (ingredient) {
      rows.push({ measure: measure || '', ingredient })
    }
  }
  return rows
})

onMounted(fetchData)
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.cocktail-content {
  flex: 1;
  padding: 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: $surface;
  min-height: 420px;
}
.cocktail-card-wide {
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  align-items: flex-start;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  margin-top: 0.5rem;
  min-width: 0;
  width: 100%;
  min-height: 320px;
}
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1);
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}
.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style> 