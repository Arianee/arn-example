import {ArnHttpClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components"
import {ConnectExample} from "./ConnectExample"
import {IfConnectedExample} from "./IfConnectedExample.js"

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-ysl-dev-quvnqrx5rq-ew.a.run.app/testProject")
  .then(arnClient => {
    window.arnClient = arnClient

    const connectExample = new ConnectExample("Connect your wallet", "Disconnect your wallet")
    connectExample.render(document.querySelector("#arn-connect"))

    const ifConnectedExample = new IfConnectedExample("You are connected!", "You are disconnected.")
    ifConnectedExample.render(document.querySelector("#arn-if-connected"))
  })
