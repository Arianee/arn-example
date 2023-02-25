<script setup>
defineProps({
  connectedMsg: String,
  disconnectedMsg: String
})
</script>

<template>
  <section>
    <h2>Connection gating</h2>
    <p>This is a sample usage of the <code>&lt;arn-if-connected&gt;</code> ARN component:</p>
    <arn-if-connected>
      <p slot="if-false">{{ disconnectedMsg }}</p>
      <p slot="if-true">{{ connectedMsg }}</p>
    </arn-if-connected>
  </section>
</template>

