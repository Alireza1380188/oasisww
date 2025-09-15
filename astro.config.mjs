// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';   // keep Functions adapter
import tailwindcss from '@tailwindcss/vite';         // <-- Tailwind v4 plugin

export default defineConfig({
  integrations: [react()],                           // no @astrojs/tailwind here
  adapter: netlify(),

  server: { host: true },

  vite: {
    plugins: [tailwindcss()],                        // enable Tailwind v4
    server: {
      host: true,
      allowedHosts: true,                            // allow *.netlify.app (Visual Editor)
      hmr: { clientPort: 443 }
    },
    preview: {
      allowedHosts: true
    }
  }
});
