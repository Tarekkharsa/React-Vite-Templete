import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
const commonConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
}
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      ...commonConfig,
      // dev specific config
    }
  } else {
    // command === 'build'
    return {
      ...commonConfig,
      // build specific config
    }
  }
})
