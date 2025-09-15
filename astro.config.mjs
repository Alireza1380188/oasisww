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
  // ...your existing Astro config
  vite: {
    server: {
      allowedHosts: [
        'devserver-preview--oasisww.netlify.app', // the exact host shown in the error
        '.netlify.app'                            // optional: allow all Netlify previews
      ]
    },
    preview: {
      allowedHosts: [
        'devserver-preview--oasisww.netlify.app',
        '.netlify.app'
      ]
    }
  }
});
