<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-brand-blue-900">
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:py-32 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="text-2xl font-extrabold text-white sm:text-3xl">
          A different way of working
        </h2>
        <p class="mt-4 text-lg text-brand-blue-50 text-center">
          Too many meetings? Requirements getting lost in phone calls and emails? <br /> We keep things streamlined, and simple.
        </p>
      </div>
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">A better way to send money.</h2>
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div v-for="feature in features" :key="feature.name" class="bg-cool-gray-700 shadow-sm rounded-xl p-4">
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-brand-red-900 text-white font-extrabold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-html="feature.icon" />
              </div>
              <h3 class="mt-5 text-2xl font-medium text-white">{{ feature.name }}</h3>
            </dt>
            <dd class="mt-2 text-base text-brand-blue-50">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
const features = [
  {
    name: 'Async first and foremost',
    description: 'We use async tools like Slack to keep everyone’s schedule as free as possible. You spend less time in meetings and more time running your ecommerce business.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />',
  },
  {
    name: 'Start simple; build for scale',
    description: 'We design and build quickly to get your products to market sooner, adding features to scale your Shopify presence in short work cycles that adapt to your business.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />',
  },
  {
    name: 'Watch progress happen',
    description: 'Drop into our shared workspace to catch up with progress, add requirements and share feedback. You can bring your team into the conversation so that no one gets left out.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />',
  },
]

export default {
  data() {
    return {
      features,
    }
  },
}
</script>
