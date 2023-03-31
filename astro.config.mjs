import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://haomingli-ling.github.io',
  base: '/personal-astro',
  integrations: [mdx(), sitemap()],
});
