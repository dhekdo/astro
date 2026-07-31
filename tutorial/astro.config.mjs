// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGithubActions ? 'https://dhekdo.github.io' : 'https://dhekdo-astro.netlify.app',
  base: isGithubActions ? '/astro' : '/',
  integrations: [preact()],
});
