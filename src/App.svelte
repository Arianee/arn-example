<script>
  import ConnectExample from "./lib/ConnectExample.svelte"
  import IfConnectedExample from "./lib/IfConnectedExample.svelte"
</script>

<main>
  <h1><img class="logo" src="https://storage.googleapis.com/arn3-static-resources/arn/arn.png" alt="ARN logo" width="50"/> Example</h1>
  <p>This is a Svelte (built by Vite) version of the ARN example.</p>
  <ConnectExample connectMsg="Connect your wallet" disconnectMsg="Disconnect your wallet"></ConnectExample>
  <IfConnectedExample connectedMsg="You are connected using wallet" disconnectedMsg="You are disconnected."></IfConnectedExample>
</main>
