<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSearchImageStore } from '~/stores/main.store';

const store = useSearchImageStore();
const { searchImage } = storeToRefs(store);
const isLoading = ref(false);

async function searchMyImage() {
  isLoading.value = true;
  await store.getUnsplashImages();
  isLoading.value = false;
}
async function revertToDefault() {
  searchImage.value = '';
  isLoading.value = true;
  await store.getUnsplashImages();
  isLoading.value = false;
}
</script>
<template>
  <header class="header-wrapper">
    <div class="header-wrapper-container">
      <div class="header-wrapper-container--search">
        <UInput
          v-model="searchImage"
          name="imageSearch"
          class="w-3/4"
          :loading="isLoading"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="Search for photo"
          color="white"
          size="lg"
          :ui="{ icon: { trailing: { pointer: '' } } }"
          @keypress.enter="searchMyImage"
        >
          <template #trailing>
            <UButton
              v-show="searchImage !== ''"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="revertToDefault"
            />
          </template>
        </UInput>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-wrapper {
  @apply w-full h-24 bg-slate-300 fixed top-0 left-0 rounded-none border border-white;
  &-container {
    @apply container max-w-[1420px];
    &--search {
      @apply flex justify-center items-center py-4;
    }
  }
}
</style>
