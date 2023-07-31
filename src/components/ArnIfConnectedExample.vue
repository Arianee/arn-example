<script setup>
import { ref } from "vue";
import {ArnConnectionStatus} from "@arianee/arn-client"
const arnClient = window.arnClient
defineProps({
  connectedMsg: String,
  disconnectedMsg: String
})
let walletAddress = ref("")
// Listen to auth status to refresh wallet address
arnClient.auth.currentContext$.subscribe(async (authContext) => {
  authContext?.status$.subscribe((status) => {
    switch (status?.connectionStatus) {
      case ArnConnectionStatus.authenticated:
        walletAddress.value = status.address
        break
      case ArnConnectionStatus.disconnected:
        walletAddress.value = ""
        break
    }
  })
})
</script>

<template>
  <section>
    <h2>Connection gating</h2>
    <p>This is a sample usage of the <code>&lt;arn-if-connected&gt;</code> ARN component:</p>
    <arn-if-connected>
      <p slot="if-false">{{ disconnectedMsg }}</p>
      <p slot="if-true">{{ connectedMsg }} {{ walletAddress }}</p>
    </arn-if-connected>
  </section>
</template>

