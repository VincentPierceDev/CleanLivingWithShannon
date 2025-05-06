// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://cleanlivingwithshannon.com',
  base: '/',
  output: 'static',
  compressHTML: true,
  integrations: [react(), sitemap()],
  adapter: netlify(),
});