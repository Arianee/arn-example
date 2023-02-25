<script>
  import ConnectExample from "./lib/ConnectExample.svelte"
  import IfConnectedExample from "./lib/IfConnectedExample.svelte"
</script>

<main>
  <h1>ARN Example</h1>
  <p>This is a Svelte (built by Vite) version of the ARN example.</p>
  <ConnectExample connectMsg="Connect your wallet" disconnectMsg="Disconnect your wallet"></ConnectExample>
  <IfConnectedExample connectedMsg="You are connected!" disconnectedMsg="You are disconnected."></IfConnectedExample>
</main>
