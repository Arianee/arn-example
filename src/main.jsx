import {render} from "preact"
import {App} from "./app.jsx"
import "./main.css"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"  // Register web components

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject").then((_arnClient) => {
  render(<App/>, document.getElementById("app"))
})
