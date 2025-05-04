// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://vincentpiercedev.github.io/CleanLivingWithShannon',
  base: '',
  output: 'static',
  compressHTML: true,
  integrations: [react()],
  adapter: netlify(),
});