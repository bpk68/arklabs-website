<template>
  <div>
    <div class="bg-white">
      <!-- Header -->
      <div class="relative pb-32 bg-brand-purple-900 overflow-hidden">
        <div class="absolute inset-0">
          <img
            class="w-full h-auto object-cover"
            src="/recent-work/shepherds-purse.jpg"
            alt="Shepherds Purse Shopify website"
          />
          <div
            class="absolute inset-0 bg-brand-blue-900 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div
          class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center"
        >
          <h1
            class="text-4xl font-extrabold text-brand-cream md:text-5xl lg:text-6xl font-title"
          >
            Shepherds Purse
          </h1>
          <p class="mt-6 mx-auto max-w-3xl text-xl text-gray-300">
            The Shepherds Purse are a Yorkshire-based artisan cheese maker,
            supplying their award-winning cheeses nationally. They needed help
            to improve their Shopify store and maximise their customer
            conversion rates.
          </p>
        </div>
      </div>

      <!-- Overlapping cards -->
      <section
        class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 class="sr-only" id="contact-heading">Contact us</h2>
        <div
          class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8"
        >
          <div
            v-for="link in supportLinks"
            :key="link.name"
            class="flex flex-col bg-white rounded-2xl shadow-xl"
          >
            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div
                class="absolute top-0 p-5 inline-block bg-brand-pink-400 rounded-xl shadow-lg transform -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  v-html="link.icon"
                />
              </div>
              <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
              <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-brand-cream overflow-hidden">
      <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div
          class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"
        />
        <div
          class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
        >
          <div>
            <h2
              class="text-base text-text-link font-semibold tracking-wide uppercase"
            >
              Shepherds Purse case study
            </h2>
            <h3
              class="mt-2 text-3xl leading-8 font-extrabold text-brand-blue-900 sm:text-4xl"
            >
              The challenge
            </h3>
          </div>
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative lg:row-start-1 lg:col-start-2">
            <svg
              class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-red-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div
              class="relative mx-auto max-w-prose lg:max-w-none lg:-mr-60 lg:-mt-20"
            >
              <figure>
                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    class="object-cover object-center"
                    src="/case-studies/sp-cs.png"
                    alt="UX consultancy work on Shepherds Purse Shopify website"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="text-base max-w-prose mx-auto lg:max-w-none">
              <p class="text-lg text-gray-500">
                Shepherds Purse had a great Shopify store, but felt they weren't
                capitalising on their shopper journey and wanted to improve
                upsells, cross-sells and highlighting of their awards.
              </p>
              <p class="text-lg text-gray-500 mt-4">
                They also wanted to unify their branding across different areas
                of the site.
              </p>
            </div>
            <div
              class="mt-5 prose prose-brand text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"
            >
              <h3>How we helped</h3>
              <p>
                We worked with the Shepherds Purse team to identify several
                areas for improvement in their UX and UI across their Shopify
                store, mostly centered around their product pages. We worked on
                their bespoke Shopify theme to make changes that highlighted
                their cheeses' awards, made better use of their page space, and
                helped promote more of their pairing products for better
                upsells.
              </p>
              <p>
                We also made improvements to messaging and information
                highlighting around their basket and checkout areas. Finally, we
                added an improved order datepicker and introduced a
                multi-address shipping process.
              </p>
              <p>
                You can view the
                <a
                  href="https://www.shepherdspurse.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Shepherds Purse Shopify website</a
                >
                to see the changes we made.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <GlobalCtaDiscovery />
  </div>
</template>

<script>
const supportLinks = [
  {
    name: 'UX consultancy',
    description:
      'Improved the customer journey and UX on their Shopify product pages with custom theme work across the Shepherds Purse Shopify store.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />',
  },
  {
    name: 'Custom theme development',
    description:
      'Implemented multi-address shipping process and improved gift messaging service in their checkout system.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />',
  },
  {
    name: 'Ongoing support',
    description:
      'Provided ongoing dedicated Shopify consultancy to support their store now and in the future.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />',
  },
];

export default {
  data() {
    return {
      supportLinks,
    };
  },
};
</script>
