<script setup>
const items = [
  '/kali.jpeg',
  '/vue.jpg',
  '/meta.jpeg',
  '/node.jpg',
  '/rwd.jpg',
  '/cli.jpg'
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg overflow-hidden carousel w-hero"
    
  >
    <img :src="item" class="w-64" draggable="false">
  </UCarousel>
</template>

<style scoped>
.carousel{
    margin: 2rem auto;
}

.carousel *{
    width: 350px;
    margin: 0 auto;
}
</style>