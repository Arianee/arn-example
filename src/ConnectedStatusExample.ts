import {ArnAuthStatus, ArnClient} from "@arianee/arn-client"

declare const arnClient: ArnClient

export class ConnectedStatusExample {
  protected status?: ArnAuthStatus
  protected latestAnchor?: Element

  constructor(protected msgConnected: string, protected msgDisconnected: string) {
    // Listen to status to refresh wallet address
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe((status) => {
        this.status = status
        if (this.latestAnchor) {
          this.render(this.latestAnchor)
        }
      })
    })
  }

  render(anchor: Element) {
    const status = this.status
    anchor.innerHTML = `
<details>
  <summary>Connection gating</summary>
  <p>This is a sample usage of the <a href="https://www.notion.so/arianee/arn-if-connected-ad16b36c8eb04691be5fba4df5ac5e79"><code>&lt;arn-if-connected&gt;</code> ARN component</a>:</p>
  <arn-if-connected>
    <p slot="if-false"><code>${this.msgDisconnected}</code></p>
    <p slot="if-true"><code>${this.msgConnected} ${status?.address}</code></p>
  </arn-if-connected>
  <p>You can also listen for an authentication context programmatically: <code><pre>${JSON.stringify(status, null, 2) ?? '(Connect to see one)'}</pre></code></p>
</details>`
    this.latestAnchor = anchor
  }
}
