export default defineEventHandler(async (searchImage) => {
  const imageResponse = await $fetch(
    `${process.env.UNSPLASH_BASE_URL}/photos?query=${searchImage}&client_id=${process.env.UNSPLASH_APIKEY}`
  );
  return {
    data: imageResponse,
  };
});
