import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// For production build caching policies
const ONE_YEAR_IN_SECONDS = 31536000;
const ONE_WEEK_IN_SECONDS = 604800;

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

// Custom plugin to add caching headers to specific assets
const cachingHeadersPlugin = () => {
  return {
    name: 'caching-headers-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Set caching headers based on file type
        const url = req.url;
        
        if (url.match(/\.(js|css)$/)) {
          // JavaScript and CSS - 1 week cache
          res.setHeader('Cache-Control', `public, max-age=${ONE_WEEK_IN_SECONDS}`);
        } else if (url.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|woff2?|ttf|eot)$/)) {
          // Media files - 1 year cache
          res.setHeader('Cache-Control', `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable`);
        }
        
        next();
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    faviconPlugin(),
    cachingHeadersPlugin()
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
    minify: 'terser', // Use Terser for better minification
    chunkSizeWarningLimit: 1600,
    // Terser options for more aggressive minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.log', 'console.debug', 'console.info'] // Remove specific functions
      },
      mangle: {
        safari10: true // Handle Safari 10 minification issues
      }
    },
    // Ensure asset filenames are predictable for search engines
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['react-icons', 'react-transition-group'],
          'utils': ['./src/utils/schema.js']
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Don't hash favicon files
          if (assetInfo.name.match(/\.(ico|svg|png)$/) && 
              (assetInfo.name.includes('favicon') || 
               assetInfo.name.includes('apple-touch-icon'))) {
            return '[name][extname]';
          }
          // Place CSS files in css directory
          if (assetInfo.name.match(/\.css$/)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          // Optimize images for web
          if (assetInfo.name.match(/\.(jpe?g|png|gif|webp)$/)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          // Place fonts in fonts directory
          if (assetInfo.name.match(/\.(woff2?|eot|ttf|otf)$/)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          // Use hashing for other assets
          return 'assets/[name]-[hash][extname]';
        }
      },
      // Reduce bundle size by excluding specific dependencies or providing external URLs
      external: [],
    },
    // Image optimization during build
    assetsInlineLimit: 10000, // 10KB - anything smaller than this will be inlined
    target: 'esnext', // Target modern browsers
    modulePreload: {
      polyfill: true, // Add modulepreload polyfill
      resolveDependencies: (filename, deps, { hostId, hostType }) => {
        // Customize module preloading
        return deps;
      }
    },
    // Generate compressed files
    brotliSize: true, // Enable brotli size reporting
    reportCompressedSize: true, // Log compressed size
    cssCodeSplit: true, // Split CSS to optimize loading
    cssMinify: true, // Minify CSS
  }
})