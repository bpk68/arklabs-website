<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="relative overflow-hidden">



    <main>


      <!-- More main page content here... -->
      <Nuxt />
      <Footer />
    </main>
  </div>
</template>

<script>

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default {
  data() {
    return {
      navigation,
    }
  },
  head: {
    title: "Nuxt.js with TailwindUI",
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
}
</script>

