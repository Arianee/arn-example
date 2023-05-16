import ConnectExample from "./connect-example/ConnectExample.jsx"
import IfConnectedExample from "./connect-example/IfConnectedExample.jsx"

function App() {
  return (
    <div className="App">
      <h1><img className="logo" src="https://storage.googleapis.com/arn3-static-resources/arn/arn.png" alt="ARN logo" width="50"/> Example</h1>
      <p>This is a React (built by Vite) version of the ARN example.</p>
      <ConnectExample connectMsg='Connect your wallet' disconnectMsg='Disconnect your wallet'/>
      <IfConnectedExample connectedMsg='You are connected using wallet' disconnectedMsg='You are disconnected.'/>
    </div>
  )
}

export default App
