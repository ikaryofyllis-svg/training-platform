import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

     workbox: {
  	cleanupOutdatedCaches: true,
  	clientsClaim: true,
  	skipWaiting: true,
  	globPatterns: ['**/*.{js,css,html,png,svg,ico}']
     },

      manifest: {
        id: '/',
        name: 'Training Platform',
        short_name: 'Training',
        description: 'Strength & Conditioning Training App',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      }
    })
  ]
})
