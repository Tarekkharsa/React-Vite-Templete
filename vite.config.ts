import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
const commonConfig = {
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
};

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      ...commonConfig,
      // dev specific config
    };
  } else {
    // command === 'build'
    return {
      ...commonConfig,
      // build specific config
    };
  }
});
