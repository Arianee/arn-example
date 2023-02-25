import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {ArnServerClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components";

const clientFactory = new ArnServerClientFactory();
const projectUrl = "https://arn-server-ysl-dev-quvnqrx5rq-ew.a.run.app/testProject"
const config = await clientFactory.createConfigFromUrl(projectUrl)
const arnClient = clientFactory.create(config);
window.arnClient = arnClient

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
