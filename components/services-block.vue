<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-16 bg-brand-cream overflow-hidden lg:py-36">
    <div class="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-red-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div class="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <h2 class="text-2xl font-extrabold text-brand-blue-900 sm:text-3xl">
           Our Services
          </h2>
          <p class="mt-3 text-lg text-gray-500">
            Shopify design, e-commerce websites, strategy and consultancy. Everything you need; nothing you don't!
          </p>

          <dl class="mt-10 space-y-6">
            <div v-for="item in services" :key="item.id" class="relative bg-red-50 hover:bg-red-200 rounded-lg px-2 pt-2 pb-5 shadow">
              <dt @click="handleItemClick(item.id)" class="hover:cursor-pointer ">
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-400 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-html="item.icon" />
                </div>
                <p class="ml-16 text-lg text-gray-700 pt-2" :id="item.name">{{ item.name }}</p>
              </dt>
            </div>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden z-10" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
          </svg>
          <div v-for="item in services" :key="item.id" class="px-4">
            <div class="lg:absolute inset-0 flex items-center relative z-20" :class="{'sr-only': !isItemVisible(item.id)}">
              <div class="lg:ml-12 ml-0">
                <h3 class="text-4xl font-extrabold text-brand-blue-900 sm:text-3xl">
                  {{ item.longName }}
                </h3>
                <p class="mt-3 text-xl text-gray-500 tracking-wide leading-relaxed">
                  {{ item.description }}
                </p>
                <p class="mt-5">
                  <NuxtLink
                    to="/contact"
                    class="inline-block transition-all duration-300 ease-in-out py-3 px-4 rounded-md shadow border border-2 border-brand-red-900 font-bold text-brand-red-900 font-medium hover:bg-brand-red-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red-900"
                  >
                    Learn more
                  </NuxtLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
const services = [
  {
    id: 1,
    name: 'Shopify project planning and consultancy',
    longName: 'Shopify project planning and consultancy',
    description:
        'As a trusted Shopify partner agency, we’ve helped lots of businesses take their trade online and take advantage of their market. As experts in Shopify and e-commerce CRO, we know what works best for your business and will help you leverage the platform to drive your sales skyward.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />',
  },
  {
    id: 2,
    name: 'Shopify store setup and theme development',
    longName: 'Shopify store setup and theme development',
    description:
        'Whether you’re starting from scratch with a new e-commerce site, or migrating from a different platform, such as Woocommerce, we can help design and build a winning e-commerce solution for you that speaks to your audience.\n' +
        'As a full-service Shopify agency, we can take care of the initial setup, theme design, and store development from end to end, launch, and beyond.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />',
  },
  {
    id: 3,
    name: 'Website design and branding',
    longName: 'Website design and branding',
    description:
        'We know what works well for e-commerce, but our magic is our ability to take e-commerce staples and great online experiences that customers expect, and weave them into your business’ brand.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />',
  },
  {
    id: 4,
    name: 'Shopify store audits',
    longName: 'Shopify store audits',
    description:
        'Is your store not converting customers? Is it not ranking well on Google? Is your Shopify site score looking a little low?\n' +
        '\n' +
        'We spend all day working with Shopify stores and websites just like yours so we know what to look for and what could be holding your website back. \n' +
        '\n' +
        'We’ll review your site and give you a breakdown of the quick wins, the technical challenges, and highlight all the areas where you can make improvements.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />',
  },
  {
    id: 5,
    name: 'UI/UX design',
    longName: 'UI/UX design',
    description:
        'Looking good is important, but it’s how you present your information that matters when it comes to improving customer experience and raising those  conversion rates.\n' +
        '\n' +
        'We can improve your Shopify store experience by using data and talking to real customers to make the right decisions. Improving the user experience for your customers means they find the products they need faster and easier. Win for your customers; win for your bottom line.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />',
  },
  {
    id: 6,
    name: 'Headless e-commerce development',
    longName: 'Headless e-commerce development',
    description:
        'As well as traditional Shopify experiences, we can help take your store to the next level by leveraging the full power of the Jamstack and pushing Shopify into headless mode. \n' +
        '\n' +
        'Faster, more secure, more flexible. The ultimate digital experiences with Shopify at the core.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />',
  },
];

export default {
  data() {
    return {
      services,
      visibleItemId: 1,
    }
  },
  methods: {
    handleItemClick(itemId) {
      this.visibleItemId = itemId
    },
    isItemVisible(itemId) {
      return this.visibleItemId === itemId;
    }
  }
}
</script>
