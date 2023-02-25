import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import {NodeGlobalsPolyfillPlugin} from "@esbuild-plugins/node-globals-polyfill"

export default defineConfig({
  plugins: [preact()],
  // See https://github.com/WalletConnect/walletconnect-monorepo/issues/734
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis"
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
