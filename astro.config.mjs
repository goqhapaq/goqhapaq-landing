import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://goqhapaq.com',
  output: "hybrid",
  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare()
});