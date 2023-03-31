import {useEffect, useState} from "react"
import {ArnConnectionStatus} from "@arianee/arn-client"

function ConnectExample(props) {
  const [walletAddress, setWalletAddress] = useState("")
  useEffect(() => {
    arnClient.auth.currentContext$.subscribe(async (authContext) => {
      authContext?.status$.subscribe((status) => {
        switch (status?.connectionStatus) {
          case ArnConnectionStatus.authenticated:
            setWalletAddress(status.address)
            break
          case ArnConnectionStatus.disconnected:
            setWalletAddress("")
            break
        }
      })
    })
  })
  return (
    <section>
      <h2>Connection gating</h2>
      <p>This is a sample usage of the <code>&lt;arn-if-connected&gt;</code> ARN component:</p>
      <arn-if-connected>
        <p slot="if-false">{props.disconnectedMsg}</p>
        <p slot="if-true">{props.connectedMsg} {walletAddress}</p>
      </arn-if-connected>
    </section>
  )
}

export default ConnectExample
