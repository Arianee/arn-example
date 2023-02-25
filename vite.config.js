import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import {defineConfig} from "vite"

export default defineConfig({
  // ...other config settings
  optimizeDeps: {
    // See https://github.com/WalletConnect/walletconnect-monorepo/issues/734
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  }
})
