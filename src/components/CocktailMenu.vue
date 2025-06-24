<template>
  <nav class="cocktail-menu">
    <ul>
      <li v-for="item in codes" :key="item" :class="{active: item === modelValue}">
        <a @click.prevent="$emit('update:modelValue', item)" href="#">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</a>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
defineProps<{ codes: string[], modelValue: string }>()
defineEmits(['update:modelValue'])
</script>
<style scoped lang="scss">
@use '../assets/styles/variables' as *;

.cocktail-menu {
  width: 220px;
  border-right: 1px solid $border;
  background: $surface;
  padding: 2rem 0.5rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  margin-bottom: 0.7rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(0);
}
li:hover {
  transform: translateX(4px);
}
li.active {
  background: $primary-light;
  transform: translateX(8px);
}
li.active a {
  color: $primary;
  font-weight: 700;
}
a {
  display: block;
  padding: 0.7rem 1.2rem;
  color: $text-secondary;
  text-decoration: none;
  font-size: 1.13rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
a:hover {
  background: $primary-light;
  color: $primary;
}
@media (max-width: 900px) {
  .cocktail-menu {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid $border;
    padding: 1rem;
  }
}
</style> 