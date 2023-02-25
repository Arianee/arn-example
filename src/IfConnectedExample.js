export class IfConnectedExample {

  constructor(msgConnected, msgDisconnected) {
    this.msgConnected = msgConnected
    this.msgDisconnected = msgDisconnected
  }

  render(anchor) {
    anchor.innerHTML = `
<section>
  <h2>Connection gating</h2>
  <p>This is a sample usage of the <code>&lt;arn-if-connected&gt;</code> ARN component:</p>
  <arn-if-connected>
    <p slot="if-false">${this.msgDisconnected}</p>
    <p slot="if-true">${this.msgConnected}</p>
  </arn-if-connected>
</section>`
  }
}
