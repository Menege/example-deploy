<template>
  <router-view />
</template>

<style lang="scss">
@use './assets/styles/variables' as *;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: $background;
  color: $text;
  line-height: 1.6;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
