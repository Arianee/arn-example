import {createApp} from "vue"
import App from "./App.vue"
import "./main.css"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"  // Register ARN web components

const clientFactory = new ArnHttpClientFactory()
clientFactory.createConfigFromUrl("https://arn-server-test-prod.arianee.com/testproject").then(arnConfig => {
  arnConfig.auth.signCallback = () => window.confirm('Ok to sign?')
  const arnClient = clientFactory.create(arnConfig)
  const app = createApp(App)
  app.provide('arn', arnClient)
  app.mount("#app")
})
