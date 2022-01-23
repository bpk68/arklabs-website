<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white" id="intro">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-brand-blue-900">A Shopify partner for life, not just for a project.</h2>
        <p class="mt-4 text-lg text-gray-500">
          Based just outside of York, North Yorkshire, we work with clients across the UK and beyond to help them develop their e-commerce strategy,
          design and build winning Shopify experiences that convert, and provide ongoing support.
        </p>
        <p class="mt-4 text-lg text-gray-500">
          Everything you need; nothing you don’t.
        </p>
      </div>
      <div class="mt-12 md:space-y-0 md:grid md:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        <p v-for="feature in features" :key="feature.name" class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-auto w-28 text-brand-blue-400 block" fill="none" viewBox="0 0 25 40" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <span class="ml-5 text-lg leading-6 font-medium text-gray-900 block">{{ feature.name }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const features = [
  {
    name: 'Honest, straightforward advice without the jargon',
  },
  {
    name: 'Shopify development that grows with your business'
  },
  {
    name: 'Long lasting partnerships with first-class support'
  },
  {
    name: 'Quality e-commerce services from start to finish'
  }
]

export default {
  data() {
    return {
      features,
    }
  },
}
</script>
