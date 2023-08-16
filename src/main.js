import {ArnHttpClientFactory} from "@arianee/arn-client"
import "@arianee/arn-components"
import {ConnectExample} from "./ConnectExample"
import {IfConnectedExample} from "./IfConnectedExample.js"
import {NftListExample} from "./NftListExample.js"
import {Erc721OwnershipExample} from "./Erc721OwnershipExample.js"
import {ManualRequestExample} from "./ManualRequestExample.js"

const clientFactory = new ArnHttpClientFactory()
const projectUrl = "https://arn-server-test-prod.arianee.com/testproject"
clientFactory.createConfigFromUrl(projectUrl)
  .then(async (arnConfig) => {
    arnConfig.auth.beforeSign = () => window.confirm("Ok to sign?")     // Optional callback before sign
    await clientFactory.create(arnConfig)

    const connectExample = new ConnectExample("Connect your wallet", "Disconnect your wallet")
    connectExample.render(document.querySelector("#arn-connect"))

    const ifConnectedExample = new IfConnectedExample("You are connected!", "You are disconnected.")
    ifConnectedExample.render(document.querySelector("#arn-if-connected"))

    const nftListExample = new NftListExample(document.querySelector("#arn-nft-list"), "myTag")
    nftListExample.render()

    const erc721 = new Erc721OwnershipExample(document.querySelector("#arn-erc721"))
    erc721.render()

    const manual = new ManualRequestExample(document.querySelector("#arn-manual"), projectUrl, '0x123', 1, 1)
    manual.render()

    document.querySelector("#arn-version").textContent = `ARN v${arnClient.version}`
  })
