import "./app.css"
import App from "./App.svelte"

import {ArnHttpClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components"

const clientFactory = new ArnHttpClientFactory()
const arnClient = await clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject")
window.arnClient = arnClient

const app = new App({
  target: document.getElementById("app")
})

export default app
