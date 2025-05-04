// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://snazzy-sunshine-ba5faf.netlify.app',
  base: '/',
  output: 'static',
  compressHTML: true,
  integrations: [react()],
  adapter: netlify(),
});