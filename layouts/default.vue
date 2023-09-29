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
    title:
      'Shopify design, migration & marketing in York and Leeds | Headless e-commerce | K-Tech',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'K-Tech is a Shopify partner agency who build Shopify websites for clients in Wakefield, Leeds, York, Yorkshire',
      },
    ],
    link: [
      {
        rel: 'preload',
        href: '/fonts/space-grotesk-v13-latin-regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'crossorigin',
      },
      {
        rel: 'preload',
        href: '/fonts/space-grotesk-v13-latin-700.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'crossorigin',
      },
    ],
  },
};
</script>
