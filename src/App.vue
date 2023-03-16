<script setup>
import ArnConnectExample from "./components/ArnConnectExample.vue"
import ArnIfConnectedExample from "./components/ArnIfConnectedExample.vue"
import ArnNftList from "./components/ArnNftList.vue"
</script>

<template>
  <ArnConnectExample connectMsg="Connect your wallet" disconnectMsg="Disconnect your wallet"/>
  <ArnIfConnectedExample disconnectedMsg="You are not connected" connectedMsg="You are connected with wallet address"/>
  <ArnNftList tag="myTag"/>
</template>

