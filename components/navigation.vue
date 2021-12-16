<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-brand-blue-900">
    <div class="bg-brand-blue-900 py-6">
      <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div class="flex items-center justify-between flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <NuxtLink to="/">
              <span class="sr-only">Ark Labs: Shopify experts in Yorkshire</span>
              <img class="md:h-16 w-auto sm:h-10" src="/logos/3.svg" alt="Ark Labs logo" />
            </NuxtLink>
            <div class="-mr-2 flex items-center md:hidden">

            </div>
          </div>
          <div class="hidden space-x-8 md:flex md:justify-end md:mr-8">
            <NuxtLink
                v-for="item in navigation"
                :to="item.href"
                :key="item.name"
                class="text-base font-medium text-lg text-brand-blue-50 hover:text-brand-cream transition-colors duration-300 ease-in-out"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-6">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center px-4 py-1 border border-transparent text-lg font-medium rounded-md text-white bg-brand-red-900 hover:bg-brand-red-500 transition-all duration-300 ease-in-out">
            <span class="mr-3">Let's talk</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
const navigation = [
  // { name: 'Case studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default {
  data() {
    return {
      navigation,
    }
  },
}
</script>
