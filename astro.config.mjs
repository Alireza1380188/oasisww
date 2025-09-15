// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions'; // use FUNCTIONS adapter

export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: netlify(),

  server: { host: true },
  vite: {
    server: {
      host: true,
      allowedHosts: true,          // allows *.netlify.app (Visual Editor)
      hmr: { clientPort: 443 }
    },
    preview: {
      allowedHosts: true
    }
  }
});
