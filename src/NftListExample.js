export class NftListExample {

  foundNFTs = []

  constructor(anchor, ...tags) {
    this.anchor = anchor
    this.tags = tags
    anchor.innerHTML = `
<section>
  <h2>NFT list by tag</h2>
  <p>This is a sample usage of the <code>arnClient.nft.arianee.getList()</code> API.</p>
  <label>Search for: </label>
  <arn-if-connected>
    <p slot="if-true"></p>
    <p slot="if-false">(Connect first to see results)</p>
  </arn-if-connected>
</section>`
    const input = this.input = document.createElement("input")
    input.value = this.tags.join(",")
    input.type = "search"
    input.onchange = () => {
      this.tags = input.value.split(",")
      this.search()
    }
    anchor.querySelector("label").append(input)
    const self = this
    // Listen to connection status changes
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe(async (status) => {
        self.updateStatus(status)
      })
    })
    this.updateStatus(arnClient.auth.currentContext?.status)
  }

  updateStatus(status) {
    let enabled = status?.connectionStatus === "authenticated"
    this.input.disabled = !enabled
    if (enabled) {
      this.search()
    }
  }

  async search() {
    this.foundNFTs = await arnClient.nft.arianee.getList({filter: {tags: this.tags}})
    this.render(this.anchor)
  }

  render() {
    let content
    const empty = this.foundNFTs.length <= 0
    if (empty) {
      content = `You own no Arianee NFT with tag <code>${this.tags}</code>.`
    } else {
      content = `<ul>${this.foundNFTs.map(nft => `<li>${nft.tokenId}</li>`)}</ul>`
    }
    this.anchor.querySelector("[slot='if-true']").innerHTML = content
  }
}
