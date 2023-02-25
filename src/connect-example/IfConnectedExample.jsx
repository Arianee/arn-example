function ConnectExample(props) {
  return (
    <section>
      <h2>Connection gating</h2>
      <p>This is a sample usage of the <code>&lt;arn-if-connected&gt;</code> ARN component:</p>
      <arn-if-connected>
        <p slot="if-false">{props.connectedMsg}</p>
        <p slot="if-true">{props.disconnectedMsg}</p>
      </arn-if-connected>
    </section>
  )
}

export default ConnectExample
