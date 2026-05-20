import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://qhapaq.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
