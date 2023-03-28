import "./app.css"
import App from "./App.svelte"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"

const clientFactory = new ArnHttpClientFactory()
const arnClient = await clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject")
window.arnClient = arnClient

const app = new App({
  target: document.getElementById("app")
})

export default app
