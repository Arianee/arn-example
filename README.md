# arn-example

Sample application using [ARN](https://arianee.notion.site/ARN-User-Guide-c2aeabd71df94190aa1b7988bbdfb4c1).

While integrating ARN into a web app can be summarized as:

1. [installing the ARN client packages](https://www.notion.so/arianee/ARN-Client-User-Guide-64f75a6e2df34094a0451e7b0ae80566?pvs=4#96094d70352149e9865080e737845de9):
   2. `@arianee/arn-client`
   3. `@arianee/arn-types`
   3. `@arianee/arn-components` if you want to use ARN web components as well.
2. Ask for a project setup on an ARN Server (or create one on the test server).
2. adding the following lines of code at app startup:
    ```js
    const myProjectUrl = 'https://my-arn-server/myProject'
    const clientFactory = new ArnHttpClientFactory()
    const arnClient = await clientFactory.createFromUrl(myProjectUrl);
   
    window.arnClient = arnClient  // or whatever scope you want to make it available from 
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
