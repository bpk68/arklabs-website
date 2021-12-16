<template>
  <div class="relative overflow-hidden">
    <Navigation />
    <main>
      <Nuxt />
      <Footer />
    </main>
  </div>
</template>

<script lang="ts">

export default {
  head: {
    title: 'Shopify design, migration & marketing in York and Leeds | Headless e-commerce | Ark Labs',
    meta: [
      {
        hid: "description",
        name: "description",
        content: 'At Ark Labs, we\'re a Shopify partner agency who build Shopify websites for clients in Selby, Leeds, York, Yorkshire'
      },
    ]
  }
};
</script>
