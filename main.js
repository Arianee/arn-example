import {ArnServerClientFactory} from "@arianeeprivate/arn-client"
import "@arianeeprivate/arn-components";

const clientFactory = new ArnServerClientFactory();
const projectUrl = "https://arn-server-ysl-v2-staging.arianee.com/yslbeauty"
const config = await clientFactory.createConfigFromUrl(projectUrl)
const arnClient = clientFactory.create(config);
window.arnClient = arnClient

const arnConnect = document.querySelector("#arn-connect");
arnConnect.innerHTML= `<arn-connect>
  <button slot="if-false">Connect your wallet</button>
  <button slot="if-true">Disconnect your wallet</button>
</arn-connect>
`
const arnIfConnected = document.querySelector("#arn-if-connected");
arnIfConnected.innerHTML= `<arn-if-connected>
  <p slot="if-false">You are not connected.</p>
  <p slot="if-true">Your are connected!</p>
</arn-if-connected>
`
