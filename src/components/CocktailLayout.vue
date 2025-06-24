<template>
  <div class="cocktail-layout">
    <slot />
  </div>
</template>
<style scoped lang="scss">
@use '../assets/styles/variables' as *;

.cocktail-layout {
  display: flex;
  max-width: 1024px;
  min-width: 360px;
  min-height: 80vh;
  margin: 2rem auto;
  border-radius: $radius;
  background: $background;
  box-shadow: $shadow;
  overflow: hidden;
  flex-wrap: wrap;
}
</style> 