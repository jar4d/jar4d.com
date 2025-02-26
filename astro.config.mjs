import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://jar4d.com/",
  base: '/',
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
    resolve: {
      alias: {
        '~': '/src'
      }
    }
  },
});
