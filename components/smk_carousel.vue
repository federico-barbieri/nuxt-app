<script setup lang="ts">
const items = [
  '/images/swampfest/smk_1.jpg',
  '/images/swampfest/smk_2.jpg',
  '/images/swampfest/smk_3.jpg',
  '/images/swampfest/smk_4.jpg',
  '/images/swampfest/smk_5.jpg',
  '/images/swampfest/smk_6.jpg',
  '/images/swampfest/smk_7.jpg',
  '/images/swampfest/smk_8.jpg',
  '/images/swampfest/smk_9.jpg',

]
</script>

<template>
  <UCarousel v-slot="{ item }" :items="items" class="w-full mx-auto">
    <img :src="item" width="300" height="150" class="mx-3">
  </UCarousel>
</template>