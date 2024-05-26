import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({  
  //build:{
  //       outDir: "./dist/app/client"
  //     },
  server: {
    proxy: {
     // "/api/v1": "http://localhost:3000/",
     //"/api": {target: "https://vr13.on render.com",
     "/api": {target: "http://127.0.0.1:3000",
                 changeOrigin: true,   
                 secure: false,   
                 rewrite: (path) => path.replace(/^\/api/,'')     
             }, 
                          
           },
          },
  plugins: [
    react()
  ],
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  resolve: {
    alias: {
      '@assets': path.join(__dirname, './src/assets'),
      '@public': path.join(__dirname, './public'),
      '@core': path.join(__dirname, './src/core'),
      '@screens': path.join(__dirname, './src/screens'),
      '@components': path.join(__dirname, './src/components'),
      '@utils': path.join(__dirname, './src/utils'),
      '@hooks': path.join(__dirname, './src/hooks'),
      '@lib': path.join(__dirname, './src/lib'),
      '@types': path.join(__dirname, './src/types'),
      '@client': path.join(__dirname, './src'),
      '@server': path.join(__dirname, './server'),
      '@loaders': path.join(__dirname, './src/loaders'),
      '@db': path.join(__dirname, './src/db'),  
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/Global.scss";`,
      },
    },
  }
})
