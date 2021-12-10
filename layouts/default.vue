<template>
  <div class="relative overflow-hidden">
    <Navigation />
    <main>
      <Nuxt />
      <Footer />
    </main>
  </div>
</template>

<script>
export default {
  head: {
    title: "Shopify design, migration & marketing in York and Leeds | Headless e-commerce | Ark Labs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js with TailwindUI example"
      }
    ]
  }
};
</script>
