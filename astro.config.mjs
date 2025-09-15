// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/edge-functions'; // your repo uses edge-functions

export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: netlify(),

  // Let Netlify Create preview connect
  server: { host: true },

  // Vite settings to allow the preview host
  vite: {
    server: {
      host: true,
      allowedHosts: true,          // allows *.netlify.app (simple + works)
      hmr: { clientPort: 443 }
    },
    preview: {
      allowedHosts: true
    }
  }
});
