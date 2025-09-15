import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify()
});
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Astro's own dev server (lets external hosts connect)
  server: { host: true },

  // Pass through to Vite (this is what fixes the Netlify Create preview)
  vite: {
    server: {
      host: true,
      // easiest: allow all hosts (you can lock it down later)
      allowedHosts: true,
      // helps when the preview is behind HTTPS/proxy
      hmr: { clientPort: 443 }
    },
    preview: {
      allowedHosts: true
    }
  }
});
