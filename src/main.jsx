import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./main.css"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components" // Register ARN web components

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-prod.arianee.com/testproject").then((_arnClient) => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode> <App/> </React.StrictMode>
  )
})
