<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSearchImageStore } from '~/stores/main.store';

const store = useSearchImageStore();
const { searchImage } = storeToRefs(store);
const isLoading = ref(false);
</script>
<template>
  <header class="header-wrapper">
    <div class="header-wrapper-container">
      <div class="header-wrapper-container--search">
        <UInput
          v-model="searchImage"
          name="imageSearch"
          class="w-3/4"
          :search="customSearchImage"
          :loading="isLoading"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="Search for photo"
          :autofocus="false"
          autocomplete="off"
          color="white"
          size="lg"
          option-attribute="name"
          trailing
          :ui="{ icon: { trailing: { pointer: '' } } }"
        >
          <template #trailing>
            <UButton
              v-show="searchImage !== ''"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="searchImage = ''"
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
