<script setup>
import { ref, inject } from "vue";
const arnClient = inject('arnClient')
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
        break
      case 'disconnected':
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

