<template>
  <div>
    <div class="bg-white">
      <!-- Header -->
      <div class="relative pb-32 bg-brand-blue-900 overflow-hidden">
        <div class="absolute inset-0">
          <img class="w-full h-auto object-cover" src="/recent-work/andrea-hall.jpg" alt="Andrea Hall Shopify website" />
          <div class="absolute inset-0 bg-brand-blue-900 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-extrabold text-brand-cream md:text-5xl lg:text-6xl font-title">Andrea Hall</h1>
          <p class="mt-6 mx-auto max-w-3xl text-xl text-gray-300">
            Andrea Hall is a talented Yorkshire artist and active open water swimmer. She creates a range of art for the swimmer community such as greetings cards, prints, stationery and more.
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
            <h2 class="text-base text-brand-blue-400 font-semibold tracking-wide uppercase">Andrea Hall case study</h2>
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
                  <img class="object-cover object-center" src="/case-studies/ah-cs.png" alt="Custom Shopify website design for Andrea Hall" />
                </div>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="text-base max-w-prose mx-auto lg:max-w-none">
              <p class="text-lg text-gray-500">
                Andrea had a personal portfolio website and a separate Etsy store. Tired of the hassle of maintaining
                two separate sites and paying expensive sales percentages to Etsy, she wanted to combine her online
                presences into a single, unified experience for both her and the customer.
              </p>
              <p class="text-lg text-gray-500 mt-4">
                The customer would get a single, streamlined ecommerce site to browse and make purchases, whilst Andrea
                would be able to manage all her content, products, after-sales care and admin in one place.
              </p>
            </div>
            <div class="mt-5 prose prose-brand text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <h3>How we helped</h3>
              <p>
                I started with Andrea's existing portfolio website which was powered by WordPress and developed a custom
                Shopify theme that focussed on her artwork products. We used the Shopify platform to manage content and
                product information whilst developing a great-looking, clean Shopify theme that focussed on the customer
                and their needs as they browsed the site.
              </p>
              <p>
                Andrea had quite a back catalogue of products on Etsy, so part of the challenge was to migrate these
                existing products into Shopify, where they could marry up with the newly designed and built custom
                Shopify theme.
              </p>
              <p>
                The last part of the puzzle was to integrate Andrea's current marketing workflows into her new Shopify
                store, including newsletter collection, MailChimp automation, and flesh out her customer reviews system.
              </p>
              <p>
                Take a look at <a href="https://www.andreahall.co.uk" target="_blank" rel="noopener noreferrer">Andrea's Shopify website</a> to see the bespoke store we created for her.
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
    name: 'Fully bespoke Shopify theme',
    description:
        'Designed and developed a new Shopify ecommerce website around Andrea`\s business goals that simplifies the customer journey to maximise conversions.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />',
  },
  {
    name: 'SEO consultancy & marketing integrations',
    description:
        'Deployed optimised, SEO-friendly Shopify theme which ranks well on the Google Lighthouse site speed scale, and integrated Shopify store with MailChimp marketing solution.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />',
  },
  {
    name: 'E-commerce migration',
    description:
        'Custom product migration from existing Etsy catalogue to new website.',
    icon: '<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />\n' +
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />',
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
