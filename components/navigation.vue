<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-brand-blue-900">
    <div class="bg-brand-blue-900 py-6">
      <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="/">
              <span class="sr-only">Workflow</span>
              <img class="h-14 w-auto sm:h-10" src="/logos/3.svg" alt="Ark Labs logo" />
            </a>
            <div class="-mr-2 flex items-center md:hidden">

            </div>
          </div>
          <div class="hidden space-x-8 md:flex md:ml-10">
            <NuxtLink
                v-for="item in navigation"
                :to="item.href"
                :key="item.name"
                class="text-base font-medium text-white hover:text-gray-300"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-6">
          <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
            Hire us
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
const navigation = [
  { name: 'Case studies', href: '/case-studies' },
  { name: 'About us', href: '/about' },
  { name: 'Get in touch', href: '/contact' },
]

export default {
  data() {
    return {
      navigation,
    }
  },
}
</script>
