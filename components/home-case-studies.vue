<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white lg:pt-16 lg:pb-32 md:pb-15 overflow-hidden">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <div>
          <div>
            <span class="h-12 w-12 rounded-md flex items-center justify-center bg-brand-blue-400 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold text-brand-blue-900">
              Do these sound familiar?
            </h2>
            <div class="my-6 text-xl text-gray-900 tracking-tight leading-8" v-for="bullet in bulletPoints" :key="bullet">
              <div class="flex">
                <div class="mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-green-500 text-bold mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p>
                    {{ bullet }}
                  </p>
                </div>
              </div>
            </div>
            <p class="mt-4 text-lg text-gray-500">
              Relax, you’re in good hands. We’ve worked with some amazing clients throughout Yorkshire (and internationally) and helped them tackle these challenges and more.
            </p>
            <div class="mt-8">
              <NuxtLink
                  to="/case-studies"
                  class="transition-all duration-300 ease-in-out py-3 px-4 rounded-md shadow border border-2 border-brand-blue-400 bg-brand-blue-400 font-bold text-white text-lg font-medium hover:bg-brand-blue-900 hover:text-brand-cream focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-900 focus:ring-offset-gray-900"
              >
                See our case studies
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img class="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="/ark-labs-shopify-site-examples.jpeg" alt="Customer profile user interface" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bulletPoints = [
  'Our store is OK, but our conversions could be better',
  'We want to launch our Shopify store but don’t know where to start',
  'We have an existing e-commerce solution but we’d like to migrate to Shopify',
  'Our competitors have the edge in search rankings and we want to up our SEO game',
  'We don’t have the in-house skills to support and maintain our Shopify store and need some regular guidance',
];

export default {
  data() {
    return {
      bulletPoints,
    }
  },
}
</script>
