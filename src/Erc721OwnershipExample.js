import {HasERC721Condition} from "@arianee/arn-types"

export class Erc721OwnershipExample {

  constructor(anchor) {
    this.anchor = anchor
    this.contractAddress = ""
    this.message = ""
    // Listen to auth status to refresh wallet address
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe((status) => {
        switch (status?.connectionStatus) {
          case "authenticated":
            this.checkOwnership()
            break
          case "disconnected":
            break
        }
        this.render()
      })
    })
  }

  async checkOwnership() {
    if (this.contractAddress) {
      const minBalance = 1  // At least one NFT
      const nftOwnershipCondition = new HasERC721Condition({
        chainId: 1, // Ethereum
        contractAddress: this.contractAddress,
        minBalance
      })
      try {
        const result = await arnClient.condition.execute({and: [nftOwnershipCondition]})
        if (result.success) {
          this.message = `The user owns at least ${minBalance} NFT of the required collection`
        } else {
          this.message = `The user doesn't own enough NFT of the required collection`
        }
      } catch (e) {
        this.message = "Error: " + e.message
      }
    } else {
      this.message = "Collection address expected"
    }
    this.render()
  }

  render() {
    this.anchor.innerHTML = `
<section>
  <h2>ERC721 ownership</h2>
  <p>This is a sample usage of the ERC721 ownership:</p>
    <label>Collection address: </label>
  <p>${this.message}</p>
</section>`
    const input = this.input = document.createElement("input")
    input.value = this.contractAddress
    input.type = "search"
    input.onchange = () => {
      this.contractAddress = input.value
      this.checkOwnership()
    }
    this.anchor.querySelector("label").append(input)
  }
}
