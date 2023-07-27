import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigVite from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),

    dts({
      insertTypesEntry: true,
    }),

    tsConfigVite()
  ],

  build: {
    lib: {
      entry: resolve(__dirname, '../src/lib/index.ts'),

      name: 'AuthModuleLib',

      formats: ['es', 'umd'],

      fileName: format => `auth-module-lib.${format}.js`,
    },

    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
