import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

import {ArnHttpClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components"

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject").then(arnClient => {
  window.arnClient = arnClient

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode> <App/> </React.StrictMode>
  )
})
