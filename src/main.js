import {createApp} from "vue"
import App from "./App.vue"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject").then(arnClient => {
  window.arnClient = arnClient
  const app = createApp(App)
  app.config.globalProperties.arnClient = arnClient
  app.mount("#app")
})
