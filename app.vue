<script setup lang="ts">
import ImageGallery from './components/ImageGallery.vue';
</script>

<template>
  <NuxtLoadingIndicator />
  <main>
    <Header />
    <ImageGallery />
  </main>
</template>
<style>
main {
  @apply m-0 p-0 overflow-x-hidden;
}
</style>
