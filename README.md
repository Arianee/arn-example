# arn-example
Sample application using ARN.

While integrating ARN into a web app can be summarized as:
1. installing the ARN packages 
2. adding the following lines of code at app startup:
    ```js
    const clientFactory = new ArnServerClientFactory();
    const config = await clientFactory.createConfigFromUrl('https://my-arn-server/myProject')
    const arnClient = clientFactory.create(config);
    window.arnClient = arnClient
    ```

it can be still worth having bootstrap/example projects to demystify it.

Check the branch that suits your needs:
- [**Angular**](https://github.com/Arianee/arn-example/tree/angular)
- **React**
  - [Built using Vite](https://github.com/Arianee/arn-example/tree/react_vite)
  - **Preact**
    - [Built using Vite](https://github.com/Arianee/arn-example/tree/preact_vite)
- **Svelte**
  - [Built using Vite](https://github.com/Arianee/arn-example/tree/svelte_vite)
- **vanilla**
  - JavaScript
    - [Built using Vite](https://github.com/Arianee/arn-example/tree/js_vite)
  - TypeScript
    - [Built using Vite](https://github.com/Arianee/arn-example/tree/ts_vite)
- **VueJS**
  - [Built using Vite](https://github.com/Arianee/arn-example/tree/vue_vite)
