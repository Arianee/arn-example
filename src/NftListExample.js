export class NftListExample {

  foundNFTs = []

  constructor(tag) {
    this.tag = tag
    // Listen to connection status changes
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe(async (status) => {
        if (status?.connectionStatus === "authenticated") {
          this.foundNFTs = await arnClient.nft.arianee.getList({tags: [tag]})
          if (this.latestAnchor) {
            this.render(this.latestAnchor)
          }
        }
      })
    })
  }

  render(anchor) {
    let content
    const empty = this.foundNFTs.length <= 0
    if (empty) {
      content = `You own no Arianee NFT with tag <code>${this.tag}</code>.`
    } else {
      content = `<ul>${this.foundNFTs.map(nft => `<li>${nft.tokenId}</li>`)}</ul>`
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
