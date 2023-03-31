import {ArnClient} from "@arianee/arn-client"

declare const arnClient: ArnClient

export class IfConnectedExample {
  protected walletAddress?: string
  protected latestAnchor?: Element

  constructor(protected msgConnected: string, protected msgDisconnected: string) {
    this.walletAddress = ""
    // Listen to status to refresh wallet address
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe((status) => {
        switch (status?.connectionStatus) {
          case "authenticated":
            this.walletAddress = status.address
            break
          case "disconnected":
            this.walletAddress = ""
            break
        }
        if (this.latestAnchor) {
          this.render(this.latestAnchor)
        }
      })
    })
  }

  render(anchor: Element) {
    anchor.innerHTML = `
<section>
  <h2>Connection gating</h2>
  <p>This is a sample usage of the <code>&lt;arn-if-connected&gt;</code> ARN component:</p>
  <arn-if-connected>
    <p slot="if-false">${this.msgDisconnected}</p>
    <p slot="if-true">${this.msgConnected} ${this.walletAddress}</p>
  </arn-if-connected>
</section>`
    this.latestAnchor = anchor
  }
}
