<script setup lang="ts">
const items = [
  '/images/swampfest/smk/carousel/smk_1.jpg',
  '/images/swampfest/smk/carousel/smk_2.jpg',
  '/images/swampfest/smk/carousel/smk_3.jpg',
  '/images/swampfest/smk/carousel/smk_4.jpg',
  '/images/swampfest/smk/carousel/smk_5.jpg',
  '/images/swampfest/smk/carousel/smk_6.jpg',
  '/images/swampfest/smk/carousel/smk_7.jpg',
  '/images/swampfest/smk/carousel/smk_8.jpg',
  '/images/swampfest/smk/carousel/smk_9.jpg',

]
</script>

<template>
  <UCarousel v-slot="{ item }" :items="items" class="w-full mx-auto">
    <img :src="item" width="300" height="150" class="mx-3">
  </UCarousel>
</template>