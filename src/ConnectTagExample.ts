export class ConnectTagExample {

  constructor(protected msgConnect: string, protected msgDisconnect: string) {
  }

  render(anchor: Element) {
    anchor.innerHTML = `
<details>
  <summary>Wallet connection using a tag</summary>
  <p>This is a sample usage of the <a href="https://www.notion.so/arianee/arn-connect-b6e3d486106c478787fef99d0a784331"><code>&lt;arn-connect&gt;</code></a> ARN component:</p>
  <arn-connect>
    <button slot="if-false">${this.msgConnect}</button>
    <button slot="if-true">${this.msgDisconnect}</button>
  </arn-connect>
</details>`
  }
}