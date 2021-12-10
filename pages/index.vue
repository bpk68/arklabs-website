<template>
  <div>
    <div class="pt-10 bg-brand-blue-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div class="lg:py-24">
              <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span class="block">A Yorkshire Shopify agency who create</span>
                <span class="block text-brand-blue-50">successful Shopify e-commerce solutions</span>
              </h1>
              <p class="mt-3 text-base text-brand-cream sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We're a small team of experienced Shopify developers, designers and marketing strategists.
              </p>
              <div class="mt-10 sm:mt-12">
                <div class="sm:flex">
                  <div class="min-w-0 flex-1">
                    <NuxtLink
                        to="/contact"
                        class="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                    >
                      Learn more
                    </NuxtLink>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <NuxtLink
                        to="/contact"
                        class="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                    >
                      Get in touch
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="/online-shopping.svg" alt="Ark Labs Shopify Experts displaying an e-commerce website on a mobile device" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <HomeIntro />
    <HomeCaseStudies />
    <ServicesBlock />
    <OurApproach />
    <PartnersBlock />
    <Testimonials />
    <RecentWork />
    <GlobalCta />
  </div>
</template>

<script lang="ts">
export default {}
</script>
