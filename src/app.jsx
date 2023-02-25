import ConnectExample from "./connect-example/ConnectExample.jsx"
import IfConnectedExample from "./connect-example/IfConnectedExample.jsx"

export function App() {

  return (
    <>
      <h1>ARN example</h1>
      <p>This is a Preact (built by Vite) version of the ARN example.</p>
      <ConnectExample connectMsg='Connect your wallet' disconnectMsg='Disconnect your wallet'/>
      <IfConnectedExample connectedMsg='You are connected!' disconnectedMsg='You are disconnected.'/>
    </>
  )
}
