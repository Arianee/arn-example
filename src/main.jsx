import {render} from "preact"
import {App} from "./app.jsx"

import {ArnHttpClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components"

const clientFactory = new ArnHttpClientFactory()
const config = clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject").then(arnClient => {
  window.arnClient = arnClient
  render(<App/>, document.getElementById("app"))
})
