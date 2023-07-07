import {ArnAuthStatus, ArnClient, ArnConnectionStatus} from "@arianee/arn-client"

declare const arnClient: ArnClient

export class ConnectProgExample {

  protected button: HTMLButtonElement
  protected status?: ArnAuthStatus
  protected latestAnchor?: Element

  constructor() {
    this.button = document.createElement("button")
    this.button.type = "button"
    const auth = arnClient.auth
    this.button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      switch (this.status?.connectionStatus) {
        case ArnConnectionStatus.connecting:
        case ArnConnectionStatus.signing:
          break
        case ArnConnectionStatus.authenticated:
          auth.disconnect()
          break;
        case ArnConnectionStatus.disconnected:
        default:
          auth.connect()
      }
    })
    // Listen to status to refresh wallet address
    auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe((status) => {
        this.status = status
        if (this.latestAnchor) {
          this.render(this.latestAnchor)
        }
      })
    })
  }

  render(anchor: Element) {
    let label: string
    let disabled
    switch (this.status?.connectionStatus) {
      case ArnConnectionStatus.connecting:
        label = "Connecting"
        disabled = true
        break
      case ArnConnectionStatus.signing:
        label = "Please sign"
        disabled = true
        break
      case ArnConnectionStatus.authenticated:
        label = "Disconnect your wallet"
        disabled = false
        break
      case ArnConnectionStatus.disconnected:
      default:
        label = "Connect your wallet"
        disabled = false
        break
    }
    this.button.textContent = label
    this.button.disabled = disabled
    anchor.innerHTML = `
<details open>
  <summary>Wallet programmatic connection</summary>
  <p>This is a sample usage of the <a href="https://www.notion.so/arianee/arn-connect-b6e3d486106c478787fef99d0a784331"><code>&lt;arn-connect&gt;</code></a> ARN component:</p>
</details>`
    anchor.querySelector("details")?.append(this.button)
    this.latestAnchor = anchor
  }
}
