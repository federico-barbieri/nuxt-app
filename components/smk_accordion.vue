<script setup lang="ts">
const items = ref([
  {
    label: 'Credential Security',
    content: 'Uses bcrypt to hash passwords and JSON Web Tokens for authentication.'
  },
  {
    label: 'App Security',
    content: 'Implements Nginx as a reverse proxy, Helmet, CORS, and Express Rate Limit among others.'
  }
])
</script>

<template>
  <UAccordion :items="items" />
</template>