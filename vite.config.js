import {defineConfig} from "vite"
import {NodeGlobalsPolyfillPlugin} from "@esbuild-plugins/node-globals-polyfill"
import vue from "@vitejs/plugin-vue2"

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (name) => name.startsWith("arn-")
      }
    }
  })],
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
