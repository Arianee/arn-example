<script setup>

const props = defineProps({
  tag: String
})
const arnClient = window.arnClient;

let foundNFTs;

const findNFTs = async() => {
  foundNFTs = await arnClient.nft.getList({tags: [props.tag]})
}
findNFTs()
</script>

<template>
  <section>
    <h2>NFT list by tag</h2>
    <p>This is a sample usage of the <code>arnClient.nft.getList(tag)</code> API:</p>
    <ul>
      <li v-for="nft in foundNFTs?.length" :key="nft.id">{{ nft.id }}</li>
    </ul>
  </section>
</template>

