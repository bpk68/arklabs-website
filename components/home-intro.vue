<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-brand-blue-900">A Shopify partner for life, not just for a project!</h2>
        <p class="mt-4 text-lg text-gray-500">
          We’re a Shopify agency based just outside of York, North Yorkshire, and we work with clients across the UK and beyond to help them develop their e-commerce strategy,
          design and build winning Shopify experiences that convert, and provide ongoing support throughout. Everything you need; nothing you don’t. <br />Just like you, we value:
        </p>
      </div>
      <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
const features = [
  {
    name: 'Honest, straightforward advice',
    description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Shopify development that grows with your business',
    description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
  },
  {
    name: 'Long-lasting partnerships with first-class support',
    description: 'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Quality services',
    description: 'Well-rounded services to develop Shopify stores from conception to sales-fuelled machines',
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
