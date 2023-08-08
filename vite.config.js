/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    esbuild: {
      jsxInject: `import React from 'react';`,
      jsxFactory: `React.createElement`,
      jsxFragment: `React.Fragment`,
    },
  },
});
