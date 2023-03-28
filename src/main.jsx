import {render} from "preact"
import {App} from "./app.jsx"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject").then(arnClient => {
  window.arnClient = arnClient
  render(<App/>, document.getElementById("app"))
})
