<script setup>
import { ref } from "vue";
defineProps({
  connectedMsg: String,
  disconnectedMsg: String
})
let walletAddress = ref("")
arnClient.auth.currentContext$.subscribe(async (authContext) => {
  authContext?.status$.subscribe((status) => {
    switch (status?.connectionStatus) {
      case 'authenticated':
        walletAddress.value = status.address
        console.log("You are connected", walletAddress.value)
        break
      case 'disconnected':
        walletAddress.value = ""
        console.log("You are disconnected", walletAddress.value)
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

