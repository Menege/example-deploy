<template>
  <div class="loader-message">
    <Transition name="spinner-fade" mode="out-in">
      <ProgressSpinner v-if="loading" key="spinner" />
      <Message v-else-if="error" key="error" severity="error">{{ error }}</Message>
      <Message v-else-if="emptyMessage" key="empty" severity="info">{{ emptyMessage }}</Message>
      <Transition v-else name="content-fade" appear>
        <div class="content-wrapper" key="content">
          <slot />
        </div>
      </Transition>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import Message from 'primevue/message'
import ProgressSpinner from 'primevue/progressspinner'

defineProps<{ loading?: boolean, error?: string, emptyMessage?: string }>()
</script>
<style scoped lang="scss">
@use '../assets/styles/variables' as *;

.loader-message {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 320px;
}

.content-wrapper {
  width: 100%;
}

.content-fade-enter-active {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.content-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
.content-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.spinner-fade-enter-active, .spinner-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.spinner-fade-enter-from, .spinner-fade-leave-to {
  opacity: 0;
}
.spinner-fade-enter-to, .spinner-fade-leave-from {
  opacity: 1;
}
</style> 