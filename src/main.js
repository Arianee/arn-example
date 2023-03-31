import {createApp} from "vue"
import App from "./App.vue"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"  // Register ARN web components

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject").then(arn => {
  const app = createApp(App)
  app.provide('arn', arn)
  app.mount("#app")
})
