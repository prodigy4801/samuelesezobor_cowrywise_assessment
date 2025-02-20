import { defineStore } from 'pinia';

type TApiResponse = {
  total: number;
  total_pages: number;
  results: TMainResults[];
};
type TMainResults = {
  id: string;
  urls: TURLCollection;
  user: TUserProfile;
};
type TURLCollection = {
  raw: string;
  full: string;
  regular: string;
};
type TUserProfile = {
  name: string;
  first_name: string;
  last_name: string;
  location: string | null;
};

export const useSearchImageStore = defineStore('search-image', {
  state: () => ({ searchImage: '', unsplashProfile: [] as TMainResults[], isConnecting: false }),
  actions: {
    async getUnsplashImages() {
      const nuxt = useNuxtApp();
      const baseUrl = nuxt.$config.public.unsplashUrl;
      const apiKey = nuxt.$config.public.unsplashKey;

      this.unsplashProfile = [];

      if (this.searchImage != null && this.searchImage !== '') {
        const hostingUrl = `${baseUrl}/search/photos?query=${this.searchImage}&client_id=${apiKey}`;
        const imageResponse: TApiResponse = await $fetch<TApiResponse>(`${hostingUrl}`);
        this.unsplashProfile = imageResponse.results as TMainResults[];
      } else {
        const hostingUrl = `${baseUrl}/photos?&client_id=${apiKey}`;
        const imageResponse = await $fetch<TMainResults[]>(`${hostingUrl}`);
        this.unsplashProfile = imageResponse;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSearchImageStore, import.meta.hot));
}
