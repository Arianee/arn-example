import "./init.js"
import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"
import {ConnectedStatusExample} from "./ConnectedStatusExample"
import {NftListExample} from "./NftListExample"
import {TranslationExample} from "./TranslationExample"
import {ConnectProgExample} from "./ConnectProgExample"
import {ConnectTagExample} from "./ConnectTagExample"

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-prod.arianee.com/testproject").then(() => {

  const connectTagExample = new ConnectTagExample("Connect your wallet", "Disconnect your wallet")
  const connectTagAnchor = document.querySelector("#arn-connect-tag")
  if (connectTagAnchor) {
    connectTagExample.render(connectTagAnchor)
  }

  const connectProgExample = new ConnectProgExample()
  const connectProgAnchor = document.querySelector("#arn-connect-prog")
  if (connectProgAnchor) {
    connectProgExample.render(connectProgAnchor)
  }

  const ifConnectedExample = new ConnectedStatusExample("You are connected with wallet", "You are disconnected.")
  const ifConnectedAnchor = document.querySelector("#arn-if-connected-example")
  if (ifConnectedAnchor) {
    ifConnectedExample.render(ifConnectedAnchor)
  }

  const nftListAnchor = document.querySelector("#nft-list-example")!
  const nftListExample = new NftListExample(nftListAnchor, ["myTag"])
  if (nftListAnchor) {
    nftListExample.render()
  }

  const i18nAnchor = document.querySelector("#translation-example")!
  const translationExample = new TranslationExample(i18nAnchor)
  if (i18nAnchor) {
    translationExample.render()
  }
})
