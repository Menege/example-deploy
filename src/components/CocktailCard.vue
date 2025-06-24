<template>
  <div class="cocktail-card-content">
    <div class="cocktail-info">
      <h2>{{ cocktail.strDrink }}</h2>
      <div><b>Category:</b> {{ cocktail.strCategory }}</div>
      <div><b>Glass:</b> {{ cocktail.strGlass }}</div>
      <div class="cocktail-instructions"><b>Instructions:</b><br>{{ cocktail.strInstructions }}</div>
      <div class="cocktail-ingredients">
        <b>List of ingredients:</b>
        <table>
          <tbody>
            <tr v-for="(row, idx) in ingredients" :key="idx">
              <td>{{ row.measure }}</td>
              <td>{{ row.ingredient }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="cocktail-thumb">
      <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" loading="lazy" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Cocktail } from '../types/cocktail'

defineProps<{ cocktail: Cocktail, ingredients: { measure: string, ingredient: string }[] }>()
</script>
<style scoped lang="scss">
@use '../assets/styles/variables' as *;

.cocktail-card-content {
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
}
.cocktail-info {
  flex: 2;
  min-width: 320px;
}
.cocktail-info h2 {
  margin-bottom: 1.2rem;
  font-size: 2rem;
  font-weight: 800;
  color: $primary;
  letter-spacing: 0.01em;
}
.cocktail-info div {
  margin-bottom: 0.7rem;
  font-size: 1.08rem;
  color: $text;
}
.cocktail-instructions {
  margin-bottom: 1.2rem;
  margin-top: 1.2rem;
  font-size: 1.08rem;
  color: $text-secondary;
}
.cocktail-ingredients {
  margin-top: 1.2rem;
}
.cocktail-ingredients table {
  margin-top: 0.5rem;
  border-collapse: collapse;
  width: 100%;
}
.cocktail-ingredients td {
  padding: 0.2rem 0.7rem 0.2rem 0;
  font-size: 1.01rem;
  color: $primary;
}
.cocktail-thumb {
  flex: 1;
  min-width: 200px;
  max-width: 320px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.cocktail-thumb img {
  width: 100%;
  max-width: 260px;
  height: auto;
  border: 2px solid $primary-light;
  border-radius: 12px;
  background: $surface;
  object-fit: cover;
  box-shadow: 0 2px 8px 0 rgba(34,34,59,0.10);
}
</style> 