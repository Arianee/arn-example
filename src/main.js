import './app.css'
import App from './App.svelte'

import {ArnServerClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components";

const clientFactory = new ArnServerClientFactory();
const projectUrl = "https://arn-server-ysl-dev-quvnqrx5rq-ew.a.run.app/testProject"
const config = await clientFactory.createConfigFromUrl(projectUrl)
const arnClient = clientFactory.create(config);
window.arnClient = arnClient

const app = new App({
  target: document.getElementById('app'),
})

export default app
