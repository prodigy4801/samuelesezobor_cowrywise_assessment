import { c as defineEventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import 'ipx';

const unsplash_api = defineEventHandler(async (searchImage) => {
  const imageResponse = await $fetch(
    `${process.env.UNSPLASH_BASE_URL}/photos?query=${searchImage}&client_id=${process.env.UNSPLASH_APIKEY}`
  );
  return {
    data: imageResponse
  };
});

export { unsplash_api as default };
//# sourceMappingURL=unsplash.api.mjs.map
