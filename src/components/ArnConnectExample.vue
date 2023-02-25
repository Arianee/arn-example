<script setup>
defineProps({
  connectMsg: String,
  disconnectMsg: String
})
</script>

<template>
  <section>
    <h2>Wallet connection</h2>
    <p>This is a sample usage of the <code>&lt;arn-connect&gt;</code> ARN component:</p>
    <arn-connect>
      <button slot="if-false">{{ connectMsg }}</button>
      <button slot="if-true">{{ disconnectMsg }}</button>
    </arn-connect>
  </section>
</template>

