import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/training-platform/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

     workbox: {
  	cleanupOutdatedCaches: true,
  	clientsClaim: true,
  	skipWaiting: true,
  	globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,webp,svg,ico}']
     },

      manifest: {
        id: '/training-platform/',
        name: 'Elite Performance Training',
        short_name: 'EXTrain',
        description: 'Strength & Conditioning Training App',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/training-platform/',
        scope: '/training-platform/',
        icons: [
          {
            src: '/training-platform/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/training-platform/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      }
    })
  ]
})
