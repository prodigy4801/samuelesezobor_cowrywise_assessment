export default defineEventHandler(async () => {
  const imageResponse = await $fetch(
    `${process.env.UNSPLASH_BASE_URL}/photos?client_id=${process.env.UNSPLASH_APIKEY}`
  );
  return {
    data: imageResponse,
  };
});
