import {ArnServerClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components";
import { ConnectExample } from "./ConnectExample"
import {IfConnectedExample} from "./IfConnectedExample"

const clientFactory = new ArnServerClientFactory();
const projectUrl = "https://arn-server-ysl-v2-staging.arianee.com/yslbeauty"
const config = await clientFactory.createConfigFromUrl(projectUrl)
const arnClient = clientFactory.create(config);
(window as any).arnClient = arnClient

const connectExample = new ConnectExample('Connect your wallet', 'Disconnect your wallet')
const connectAnchor = document.querySelector("#arn-connect-example")
if (connectAnchor) {
  connectExample.render(connectAnchor)
}

const ifConnectedExample = new IfConnectedExample('You are connected!', 'You are disconnected.')
const ifConnectedAnchor = document.querySelector("#arn-if-connected-example")
if (ifConnectedAnchor) {
  ifConnectedExample.render(ifConnectedAnchor)
}
