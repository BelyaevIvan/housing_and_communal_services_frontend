import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mkcert(),
    VitePWA({ 
        registerType: 'autoUpdate',
        devOptions: {
            enabled: true,
        },
        manifest:{
            name: "My Awesome App",
            short_name: "AwesomeApp",
            start_url: "/Kvartplata_Frontend",
            display: "standalone",
            background_color: "#ffffff",
            theme_color: "#007bff",
            orientation: "portrait",
            icons: [
                {
                    "src": "logo.png",
                    "type": "image/png", "sizes": "48x48"
                },
              {
                  "src": "logo.png",
                  "type": "image/png", "sizes": "192x192"
              },
              {
                  "src": "logo.png",
                  "type": "image/png", "sizes": "512x512"
              }
            ],
          }
    })
],
  base: "/Kvartplata_Frontend", //мой репозиторий
  server: {
    https:{
        key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
        cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
      },
    port: 3000,
    proxy: {
        "/api": {
            target: "http://localhost:8000",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
        },
    },
},
});