// @ts-check
import { defineConfig } from 'astro/config';
import { Features } from 'lightningcss';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    vite: {
        css: {
            transformer: "lightningcss",
            lightningcss: {
                include: Features.Nesting,
            },
        },
    },
});
