/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
