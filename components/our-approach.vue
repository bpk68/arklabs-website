<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-indigo-700">
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white tracking-tight">
        A different way of working
      </h2>
      <p class="mt-4 max-w-3xl text-lg text-indigo-200">
        Too many meetings? Requirements getting lost in phone calls and emails? <br /> We keep things streamlined, and simple.
      </p>
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">A better way to send money.</h2>
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div v-for="feature in features" :key="feature.name">
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {{ feature.icon }}
                </svg>
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
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
    name: 'Async first',
    description: 'We share updates and conversations in tools like Slack, which make it easy to discuss ideas when you’re ready and ensure nothing gets missed. \n' +
        '\n' +
        'Being asynchronous first, means we keep everyone’s schedule as free as possible, so you can spend less time in meetings and more time running your ecommerce business.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />',
  },
  {
    name: 'Start simple, build for scale. Repeat and grow',
    description: 'We believe in starting simple and building quickly to get your products to market. Once established, we can build out new features and scale your Shopify presence in short development cycles that adapt to the changing needs of your growing business.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />',
  },
  {
    name: 'Gather feedback using shared tools',
    description: 'We capture requirements and feedback via online tools that are easy to use, such as Height, Figma, and Slack. \n' +
        '\n' +
        'What’s more, you can bring your team into the conversation so that no one gets left out of updates.',
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
