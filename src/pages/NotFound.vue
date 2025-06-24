<template>
  <div class="not-found">
    <div class="not-found-card">
      <div class="error-code">404</div>
      <div class="not-found-text">Page not found</div>
      <button class="not-found-btn" @click="$router.push('/')">
        <span class="pi pi-home"></span> Go Home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.not-found {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $text-secondary;
}
.not-found-card {
  background: $surface;
  border-radius: 20px;
  box-shadow: $shadow;
  padding: 3rem 2.5rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
}
.error-code {
  font-size: 6rem;
  font-weight: 800;
  color: $primary;
  margin-bottom: 1.2rem;
  letter-spacing: 0.05em;
}
.not-found-text {
  font-size: 1.35rem;
  color: $text;
  margin-bottom: 2.2rem;
  text-align: center;
}
.not-found-btn {
  background: $primary;
  color: $surface;
  border: none;
  border-radius: 10px;
  padding: 0.85rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  box-shadow: 0 2px 8px 0 rgba(34,34,59,0.10);
  transition: background 0.18s, color 0.18s;
}
.not-found-btn:hover {
  background: $primary-light;
  color: $primary;
}
</style> 