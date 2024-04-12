<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

useHead({
  title: 'Federico Barbieri',
  meta: [
    { name: 'description', content: "Federico Barbieri's 2024 Web Development portfolio." }
  ],
  bodyAttrs: {
    class: 'test'
  },
})

</script>

<style>
body{
    margin: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
