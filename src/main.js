import {createApp} from "vue"
import App from "./App.vue"

import {ArnServerClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components"

const clientFactory = new ArnServerClientFactory()
const projectUrl = "https://arn-server-iwc-dev-quvnqrx5rq-ew.a.run.app/iwc"
clientFactory.createFromUrl(projectUrl).then(arnClient => {
  window.arnClient = arnClient
  const app = createApp(App)
  app.config.globalProperties.arnClient = arnClient
  app.mount("#app")
})
