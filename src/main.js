import {createApp} from "vue"
import App from "./App.vue"

import {ArnServerClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components"

const clientFactory = new ArnServerClientFactory()
const projectUrl = "https://arn-server-ysl-dev-quvnqrx5rq-ew.a.run.app/testProject"
const config = await clientFactory.createConfigFromUrl(projectUrl)
const arnClient = clientFactory.create(config)
window.arnClient = arnClient

createApp(App).mount("#app")
