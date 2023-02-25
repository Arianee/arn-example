export class ConnectExample {

  constructor(protected msgConnect: string, protected msgDisconnect: string) {
  }

  render(anchor: Element) {
    anchor.innerHTML = `
<section>
  <h2>Wallet connection</h2>
  <p>This is a sample usage of the <code>&lt;arn-connect&gt;</code> ARN component:</p>
  <arn-connect>
    <button slot="if-false">${this.msgConnect}</button>
    <button slot="if-true">${this.msgDisconnect}</button>
  </arn-connect>
</section>`
  }
}
