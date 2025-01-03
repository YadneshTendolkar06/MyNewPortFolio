import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/state': 'https://github.com',
  //   }
  // }
  server: {
    proxy: {
      '/YadneshTendolkar06' : 'https://github.com'
    }
  }
})
//https://github.com/YadneshTendolkar06