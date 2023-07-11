import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"
import {ConnectExample} from "./ConnectExample"
import {IfConnectedExample} from "./IfConnectedExample.js"
import {NftListExample} from "./NftListExample.js"
import {Erc721OwnershipExample} from "./Erc721OwnershipExample.js"

const clientFactory = new ArnHttpClientFactory()
clientFactory.createFromUrl("https://arn-server-test-prod.arianee.com/testproject")
  .then(async (_arnClient) => {
    const connectExample = new ConnectExample("Connect your wallet", "Disconnect your wallet")
    connectExample.render(document.querySelector("#arn-connect"))

    const ifConnectedExample = new IfConnectedExample("You are connected!", "You are disconnected.")
    ifConnectedExample.render(document.querySelector("#arn-if-connected"))

    const nftListExample = new NftListExample(document.querySelector("#arn-nft-list"), "myTag")
    nftListExample.render()

    const erc721 = new Erc721OwnershipExample(document.querySelector("#arn-erc721"))
    erc721.render()
  })
