<script setup lang="ts">
const imageSearch = ref<string>('');
</script>
<template>
  <header class="header-wrapper">
    <div class="header-wrapper-container">
      <div class="header-wrapper-container--search">
        <UInput
          v-model="imageSearch"
          name="imageSearch"
          class="w-3/4"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="Search for photo"
          :autofocus="false"
          autocomplete="off"
          color="white"
          size="lg"
          :ui="{ icon: { trailing: { pointer: '' } } }"
        >
          <template #trailing>
            <UButton
              v-show="imageSearch !== ''"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="imageSearch = ''"
            />
          </template>
        </UInput>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-wrapper {
  @apply w-full h-24 bg-slate-300;
  &-container {
    @apply container max-w-[1420px];
    &--search {
      @apply flex justify-center items-center py-4;
    }
  }
}
</style>
