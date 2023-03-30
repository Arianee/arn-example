import {createApp} from "vue"
import App from "./App.vue"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"  // Load the ARN web components

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject").then(arnClient => {
  const app = createApp(App)
  window.arnClient = arnClient; // So that ARN web components find it
  app.provide('arnClient', arnClient)
  app.mount("#app")
})
