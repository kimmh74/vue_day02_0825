import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    base: mode === 'production'  ?  '/vue_day02_0825/'  :  '/',         //예: /my-react-app/  
  }
})
