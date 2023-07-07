import {ArnAuthStatus, ArnClient, ArnConnectionStatus} from "@arianee/arn-client"
import {NmpCertificatesResponse} from "@arianee/arn-types"

declare const arnClient: ArnClient

export class NftListExample {

  protected foundNFTs: NmpCertificatesResponse[] = []
  protected input: HTMLInputElement

  constructor(protected anchor: Element, protected tags: string[]) {
    anchor.innerHTML = `
<details>
  <summary>NFT list by tag</summary>
  <p>This is a sample usage of the <a href="https://www.notion.so/arianee/ARN-Client-NFT-API-475b6d3044424aa7be8b9ffc3aec9631?pvs=4#eb7163df90724e4684b3874389c6e579"><code>arnClient.nft.arianee.getList()</code> API</a>.</p>
  <label>Search for: </label>
  <arn-if-connected>
    <p slot="if-true"></p>
    <p slot="if-false">(Connect first to see results)</p>
  </arn-if-connected>
</details>`
    const input = this.input = document.createElement("input")
    input.value = this.tags.join(",")
    input.type = "search"
    input.onchange = () => {
      this.tags = input.value.split(",")
      this.search()
    }
    anchor.querySelector("label")!.append(input)
    const self = this
    // Listen to connection status changes
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe(async (status) => {
        self.updateStatus(status)
      })
    })
    this.updateStatus(arnClient.auth.currentContext?.status)
  }

  updateStatus(status?: ArnAuthStatus) {
    const enabled = status?.connectionStatus === ArnConnectionStatus.authenticated
    this.input.disabled = !enabled
    if (enabled) {
      this.search()
    }
  }

  async search() {
    this.foundNFTs = await arnClient.nft.arianee.getList({filter: {tags: this.tags}})
    this.render()
  }

  render() {
    let content
    const empty = this.foundNFTs.length <= 0
    if (empty) {
      content = `You own no Arianee NFT with tag <code>${this.tags}</code>.`
    } else {
      content = `<ul>${this.foundNFTs.map(nft => `<li>${nft.tokenId}</li>`)}</ul>`
    }
    this.anchor.querySelector("[slot='if-true']")!.innerHTML = content
  }
}
