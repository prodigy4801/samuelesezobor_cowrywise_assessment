<script setup>
import { storeToRefs } from 'pinia';
import { useSearchImageStore } from '~/stores/main.store';

const store = useSearchImageStore();
const { data: unsplashImages, status } = await useLazyFetch('/api/unsplash.api', {
  transform: (_unsplashImages) => _unsplashImages.data,
});
const { unsplashProfile, isConnecting } = storeToRefs(store);
unsplashProfile.value = unsplashImages.value;
isConnecting.value = status.value === 'pending' ? true : false;
</script>
<template>
  <div class="imagegallery-wrapper">
    <div v-if="isConnecting" class="imagegallery-wrapper--grid">
      <div v-for="index in 6" :key="index">
        <div class="relative h-[14rem] w-[250px] bg-gray-200">
          <div class="absolute bottom-8 left-4 flex flex-col gap-2">
            <USkeleton class="h-2 w-[150px]" />
            <USkeleton class="h-2 w-[100px]" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="unsplashProfile != null" class="imagegallery-wrapper--grid">
      <div v-for="(image, index) in unsplashProfile" :key="index">
        <div class="relative">
          <NuxtImg class="w-full rounded-none" :src="image.urls.full" />
          <div class="absolute bottom-8 left-4 flex flex-col gap-0">
            <h4 class="font-Roboto text-gray-200">{{ image.user.name }}</h4>
            <h6 class="font-Lato text-sm text-gray-200/80">{{ image.user.location }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imagegallery-wrapper {
  @apply container flex justify-center items-center py-20;
  &--grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4 justify-center items-center;
  }
}
</style>
