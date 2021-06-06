import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// const path = require('path')

export default defineConfig({
  base: './',
  build:{
    outDir:'dist'
  },
  resolve:{
    extensions:  ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, "src"),
      'comps': path.resolve(__dirname, "src/components"),
      'views': path.resolve(__dirname, "src/views"),
      'assets': path.resolve(__dirname, "src/assets"),
    }
  },
  plugins: [vue()]
})
