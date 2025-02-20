import { defineStore } from 'pinia';

export const useSearchImageStore = defineStore('search-image', {
  state: () => ({ searchImage: '' }),
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSearchImageStore, import.meta.hot));
}
