import { defineConfig } from 'vite';

export default defineConfig({
   base: './',
   define: { 'process.env': {} },
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
         '.js',
         '.json',
         '.jsx',
         '.mjs',
         '.ts',
         '.tsx',
      ],
   },
});