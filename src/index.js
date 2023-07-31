import React, {createContext} from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components" // Register ARN web components

export const ArnContext = createContext(undefined)

const clientFactory = new ArnHttpClientFactory()
clientFactory.createConfigFromUrl("https://arn-server-test-prod.arianee.com/testproject").then(async (arnConfig) => {
  arnConfig.auth.signCallback = () => window.confirm("Ok to sign?")
  const arnClient = await clientFactory.create(arnConfig)
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode> <ArnContext.Provider value={arnClient}> <App/> </ArnContext.Provider> </React.StrictMode>
  )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
