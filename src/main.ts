import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"
import {ConnectExample} from "./ConnectExample"
import {IfConnectedExample} from "./IfConnectedExample"
import {NftListExample} from "./NftListExample"

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-dev.arianee.com/testproject").then(arnClient => {
  (window as any).arnClient = arnClient

  const connectExample = new ConnectExample("Connect your wallet", "Disconnect your wallet")
  const connectAnchor = document.querySelector("#arn-connect-example")
  if (connectAnchor) {
    connectExample.render(connectAnchor)
  }

  const ifConnectedExample = new IfConnectedExample("You are connected!", "You are disconnected.")
  const ifConnectedAnchor = document.querySelector("#arn-if-connected-example")
  if (ifConnectedAnchor) {
    ifConnectedExample.render(ifConnectedAnchor)
  }

  const nftListExample = new NftListExample(["membership"])
  const nftListAnchor = document.querySelector("#nft-list-example")
  if (nftListAnchor) {
    nftListExample.render(nftListAnchor)
  }
})
