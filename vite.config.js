import { defineConfig } from 'vite';
export default defineConfig({
   base: './',
   define: { 'process.env': {} },
   resolve: {
      build: {
         target: 'modules',
         outDir: '.vite-dist',
         rollupOptions: {
            input: {
               stylesheet: './src/sass/style.ts',
               main: './src/main.ts',
            },
         },
      },
   },
});