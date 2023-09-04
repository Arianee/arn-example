import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import {defineConfig} from "vite"
import {readFile} from 'node:fs/promises'; // required import statement

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
        {                                                                    //
          name: 'raffy-fix',                                                 //
          setup(build) {                                                     // plugin
            build.onLoad({ filter: /ens-normalize/ }, async args => {        // that
              let contents = await readFile(args.path, {encoding: 'utf8'});  // renames
              contents = contents.replaceAll('process(', 'raffy_process(');  // process()
              return {contents};                                             // to
            });                                                              // raffy_process()
          },                                                                 //
        },
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  }
})
