<script setup>

import {ArnConnectionStatus} from "@arianee/arn-client"

const props = defineProps({
  tag: String
})
const arnClient = window.arnClient;

let foundNFTs;

const findNFTs = async() => {
  foundNFTs = await arnClient.nft.arianee.getList({tags: [props.tag]})
}
arnClient.auth.currentContext$.subscribe(async (authContext) => {
  authContext?.status$.subscribe((status) => {
    if (status?.connectionStatus === ArnConnectionStatus.authenticated) {
      findNFTs()
    }
  });
});
</script>

<template>
  <h2>NFT list by tag</h2>
  <p>This is a sample usage of the <code>arnClient.nft.arianee.getList(tag)</code> API:</p>
  <arn-if-connected>
    <div slot="if-true">
      <ul v-if="foundNFTs && foundNFTs.length > 0">
        <li v-for="nft in foundNFTs?.length" :key="nft.tokenId">{{ nft.tokenId }}</li>
      </ul>
      <p v-else>
        You own no Arianee NFT with tag <code>{{this.tag}}</code>.
      </p>
    </div>
    <div slot="if-false">
      (you can list NFTs only when connected)
    </div>
  </arn-if-connected>
</template>

