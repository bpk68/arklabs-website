<template>
  <div
    class="bg-brand-blue-900 relative bg-left-top bg-no-repeat"
    style="background-image: url(/logos/square-1.svg)"
  >
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-brand-cream sm:text-4xl">
        Let’s start with a chat
      </h2>
      <p class="mt-4 text-lg leading-6 text-brand-blue-50">
        We’re confident you’ll love working with us on your next Shopify project, but let’s talk through your ideas and see how we can build the best solution for your business together.
      </p>
      <NuxtLink
        to="/contact"
        class="inline-block leading-none w-auto transition-all duration-300 ease-in-out py-3 px-4 mt-5 border border-2 border-brand-red-900 rounded-md shadow bg-brand-red-900 text-white text-lg font-medium hover:bg-brand-red-500 hover:border-brand-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red-900"
      >
        <span class="mr-3 inline-block align-middle">Let's talk</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
