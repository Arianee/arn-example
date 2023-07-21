function ConnectExample(props) {
  return (
    <section>
      <h2>Wallet connection</h2>
      <p>This is a sample usage of the <code>&lt;arn-connect&gt;</code> ARN component:</p>
      <arn-connect>
        <button slot="if-false">{props.connectMsg}</button>
        <button slot="if-true">{props.disconnectMsg}</button>
      </arn-connect>
    </section>
  )
}

export default ConnectExample
