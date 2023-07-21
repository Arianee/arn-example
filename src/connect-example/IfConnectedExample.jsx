import {useContext, useEffect, useState} from "react"
import {ArnContext} from "../index"

function ConnectExample(props) {
  const arnClient = useContext(ArnContext)
  const [walletAddress, setWalletAddress] = useState("")
  useEffect(() => {
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe((status) => {
        setWalletAddress(status?.address || "")
      })
    })
  })
  return (
    <section>
      <h2>Connection gating</h2>
      <p>This is a sample usage of the <code>&lt;arn-if-connected&gt;</code> ARN component:</p>
      <arn-if-connected>
        <p slot="if-false">{props.disconnectedMsg}</p>
        <p slot="if-true">{props.connectedMsg} <code>{walletAddress}</code></p>
      </arn-if-connected>
    </section>
  )
}

export default ConnectExample
