import "./init.js"
import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"
import {ConnectExample} from "./ConnectExample"
import {IfConnectedExample} from "./IfConnectedExample"
import {NftListExample} from "./NftListExample"
import {TranslationExample} from "./TranslationExample"

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-prod.arianee.com/testproject").then(() => {
  const connectExample = new ConnectExample("Connect your wallet", "Disconnect your wallet")
  const connectAnchor = document.querySelector("#arn-connect-example")
  if (connectAnchor) {
    connectExample.render(connectAnchor)
  }

  const ifConnectedExample = new IfConnectedExample("You are connected with wallet", "You are disconnected.")
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
