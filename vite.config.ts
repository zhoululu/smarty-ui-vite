/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  resolve: {
    alias: {
      // 'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
  plugins: [vue(), vueJsx({}), Unocss()],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      formats: ['es', 'umd', 'iife'],
    },
    cssCodeSplit: true,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    // transformMode: {
    //   web: [/.[tj]sx$/]
    // },
    testTransformMode: {
      web: ['/.[tj]sx$/'],
    },
  },
})
