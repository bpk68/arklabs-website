<template>
  <div>
    <div class="bg-white">
      <!-- Header -->
      <div class="relative pb-32 bg-brand-blue-900 overflow-hidden">
        <div class="absolute inset-0">
          <img class="w-full h-auto object-cover" src="/recent-work/ashes-with-art.jpg" alt="Ashes With Art Shopify website" />
          <div class="absolute inset-0 bg-brand-blue-900 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-extrabold text-brand-cream md:text-5xl lg:text-6xl font-title">Ashes With Art</h1>
          <p class="mt-6 mx-auto max-w-3xl text-xl text-gray-300">
            Ashes With Art are a unique business who fuse traditional craftsmanship with contemporary design to create
            stunning and unique pieces of memorial jewellery and cremation glass art.
          </p>
        </div>
      </div>

      <!-- Overlapping cards -->
      <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
        <h2 class="sr-only" id="contact-heading">Contact us</h2>
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div class="absolute top-0 p-5 inline-block bg-brand-red-900 rounded-xl shadow-lg transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-html="link.icon" />
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
        <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 class="text-base text-brand-blue-400 font-semibold tracking-wide uppercase">Ashes With Art case study</h2>
            <h3 class="mt-2 text-3xl leading-8 font-extrabold text-brand-blue-900 sm:text-4xl">The challenge</h3>
          </div>
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative lg:row-start-1 lg:col-start-2">
            <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
              <defs>
                <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-red-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div class="relative mx-auto max-w-prose lg:max-w-none lg:-mr-60 lg:-mt-20">
              <figure>
                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img class="object-cover object-center" src="/case-studies/awa-cs.png" alt="SEO consultancy on Ashes With Art Shopify website" />
                </div>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="text-base max-w-prose mx-auto lg:max-w-none">
              <p class="text-lg text-gray-500">
                Ashes With Art hand craft made-to-order jewellery pieces that incorporate the ashes of loved ones to make truly
                memorable gifts. We supported their SEO consultancy work to improve the speed of their Shopify store
                across mobile devices, and developed custom landing pages to maximise conversions.
              </p>
            </div>
            <div class="mt-5 prose prose-brand text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <h3>How we helped</h3>
              <p>
                We worked closely with the Ashes With Art team in collaboration with an SEO consultancy to make several
                site-wide changes and optimisations to their custom-built Shopify store. This helped to improve their
                website speed, especially on mobile devices, which ultimately helped to increase their search result rankings.
              </p>
              <p>
                Along with several tweaks and changes across the site, we also developed several custom landing pages in
                keeping with their current theme design, to further maximise Ashes With Art’s conversions from visitors
                to their collection pages.
              </p>
              <p>
                Finally, we helped to upgrade their current theme to take advantage of the latest Shopify features, and
                successfully launched their shiny new and improved Shopify store.
              </p>
              <p>
                Check out the <a href="https://www.asheswithart.co.uk/" target="_blank" rel="noopener noreferrer">Ashes With Art</a> Shopify website.
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
    name: 'Custom theme development',
    description:
        'Developed custom collection-based landing pages complete with editable Shopify meta fields.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />',
  },
  {
    name: 'Search optimisation improvements',
    description:
        'Collaborated with SEO consultancy to implement technical SEO improvements across the Shopify store.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />',
  },
  {
    name: 'Shopify theme upgrade',
    description:
        'Upgraded current bespoke theme to support Shopify theme v2.0 features, including improved filtering and search.',
    icon: '<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />\n' +
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />',
  },
];

export default {
  data() {
    return {
      supportLinks,
    }
  },
}
</script>
