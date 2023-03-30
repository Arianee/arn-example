import {ArnClient, ArnConnectionStatus} from "@arianee/arn-client"
import {NmpGetCertificatesResponse} from "@arianee/arn-types"

declare const arnClient: ArnClient

export class NftListExample {

  protected foundNFTs: NmpGetCertificatesResponse[] = []
  protected latestAnchor?: Element

  constructor(protected tags: string[]) {
    // Listen to connection status changes
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe(async (status) => {
        if (status?.connectionStatus === ArnConnectionStatus.authenticated) {
          this.foundNFTs = await arnClient.nft.arianee.getList({tags: this.tags})
          if (this.latestAnchor) {
            this.render(this.latestAnchor)
          }
        }
      })
    })
  }

  render(anchor: Element) {
    let content
    const empty = this.foundNFTs.length <= 0
    if (empty) {
      content = `You own no Arianee NFT with tag <code>${this.tags}</code>.`
    } else {
      content = `<ul>${this.foundNFTs.map((nft: NmpGetCertificatesResponse) => `<li>${nft.tokenId}</li>`)}</ul>`
    }
    anchor.innerHTML = `
<section>
  <h2>NFT list by tag</h2>
  <p>This is a sample usage of the <code>arnClient.nft.arianee.getList(tag)</code> API:</p>
  <arn-if-connected>${content}</arn-if-connected>
</section>`
    this.latestAnchor = anchor
  }
}
