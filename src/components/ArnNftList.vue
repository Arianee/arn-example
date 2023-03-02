<script setup>

import {ArnConnectionStatus} from "@arianeeprivate/arn-client"

const props = defineProps({
  tag: String
})
const arnClient = window.arnClient;

let foundNFTs;

const findNFTs = async() => {
  foundNFTs = await arnClient.nft.getList({tags: [props.tag]})
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
  <p>This is a sample usage of the <code>arnClient.nft.getList(tag)</code> API:</p>
  <arn-if-connected>
    <div slot="if-true">
      <ul>
        <li v-for="nft in foundNFTs?.length" :key="nft.id">{{ nft.id }}</li>
      </ul>
    </div>
    <div slot="if-false">
      (you can list NFTs only when connected)
    </div>
  </arn-if-connected>
</template>

