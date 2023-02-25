import {defineConfig} from "vite"
import {NodeGlobalsPolyfillPlugin} from "@esbuild-plugins/node-globals-polyfill"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
