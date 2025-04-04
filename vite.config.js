import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Custom plugin to handle favicon files correctly
const faviconPlugin = () => {
  return {
    name: 'favicon-plugin',
    writeBundle() {
      // List of favicon files to copy directly without hashing
      const favicons = [
        'favicon.ico',
        'favicon.svg',
        'apple-touch-icon.png',
        'favicon-96x96.png',
        'web-app-manifest-192x192.png',
        'web-app-manifest-512x512.png'
      ];
      
      // Create the dist directory if it doesn't exist
      if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
      }
      
      // Copy each favicon file
      favicons.forEach(file => {
        if (fs.existsSync(file)) {
          try {
            fs.copyFileSync(file, `dist/${file}`);
            console.log(`Copied ${file} to dist/`);
          } catch (err) {
            console.error(`Error copying ${file}:`, err);
          }
        } else {
          console.warn(`Warning: ${file} not found, skipping`);
        }
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    faviconPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true,
    chunkSizeWarningLimit: 1600,
    // Ensure asset filenames are predictable for search engines
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Don't hash favicon files
          if (assetInfo.name.match(/\.(ico|svg|png)$/) && 
              (assetInfo.name.includes('favicon') || 
               assetInfo.name.includes('apple-touch-icon'))) {
            return '[name][extname]';
          }
          // Use hashing for other assets
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
})