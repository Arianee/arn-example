<section>
  <section>
    <h2>Connection gating</h2>
    <p>This is a sample usage of the <code>&lt;arn-if-connected&gt;</code> ARN component:</p>
    <arn-if-connected>
      <p slot="if-false">{disconnectedMsg}</p>
      <p slot="if-true">{connectedMsg} {walletAddress}</p>
    </arn-if-connected>
  </section>
</section>

<script>
  import {ArnConnectionStatus} from "@arianee/arn-client"

  export let connectedMsg, disconnectedMsg, walletAddress
  // Listen to auth status to refresh wallet address
  window.arnClient.auth.currentContext$.subscribe(async (authContext) => {
    authContext?.status$.subscribe((status) => {
      switch (status?.connectionStatus) {
        case ArnConnectionStatus.authenticated:
          walletAddress = status.address
          break
        case ArnConnectionStatus.disconnected:
          walletAddress = ""
          break
      }
    })
  })
</script>
