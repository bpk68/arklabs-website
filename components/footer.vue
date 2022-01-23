<template>
  <footer class="bg-brand-cream" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Ark Labs footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-4 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-3">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Solutions
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <NuxtLink
                      :to="item.href"
                      :key="item.name"
                      class="text-base text-gray-500 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <NuxtLink
                      :to="item.href"
                      :key="item.name"
                      class="text-base text-gray-500 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <NuxtLink
                      :to="item.href"
                      :key="item.name"
                      class="text-base text-gray-500 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <NuxtLink
                      :to="item.href"
                      :key="item.name"
                      class="text-base text-gray-500 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0">
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Tell us about your Shopify project
          </h3>
          <p class="my-4 text-base text-gray-500">
            Book a quick meeting with us to discuss your Shopify or e-commerce needs.
          </p>
          <a
            href="https://www.calendar.com/ark-labs/30-min-meeting/duration/"
            target="_blank"
            class="transition-all duration-300 ease-in-out w-auto flex items-center justify-center max-w-md border-2 border-transparent border-brand-blue-900 rounded-md py-2 px-4 text-brand-blue-900 font-medium hover:text-white hover:bg-brand-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-900"
          >
            <span class="mr-3">Book a quick meeting</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between text-center lg:text-left">
        <div>
          <img class="w-40 mx-auto lg:mx-0" src="/logos/2.svg" alt="Ark Labs" />
        </div>
        <!-- TrustBox widget - Micro Review Count -->
        <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="619b4f88221fc2091eb947a5" data-style-height="24px" data-style-width="100%" data-theme="light" data-stars="1,2,3,4,5" data-no-reviews="hide" data-scroll-to-list="true" data-allow-robots="true" data-min-review-count="10">
          <a href="https://uk.trustpilot.com/review/ark-labs.co.uk" target="_blank" rel="noopener">Trustpilot</a>
        </div>
        <!-- End TrustBox widget -->
        <p class="mt-8 text-sm text-gray-400 md:mt-0 md:order-1 lg:text-right">
          &copy; Ark Labs Ltd. All rights reserved. Registered in England &amp; Wales <br /> Company number: 13589051. VAT number: GB391973943.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
const navigation = {
  solutions: [
    { name: 'Case studies', href: '/case-studies' },
  ],
  support: [
    { name: 'Contact us', href: '/contact' },
  ],
  company: [
    { name: 'About', href: '/about' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
}

export default {
  data() {
    return {
      navigation,
    }
  },
}
</script>
