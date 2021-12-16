<template>
  <div>
    <div class="pt-10 bg-brand-blue-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div class="lg:py-24">
              <h1 class="mt-4 text-4xl font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl">
                <span class="block">A Yorkshire <span class="underline" style="text-decoration-color: #E62B4A;">Shopify agency</span> who create</span>
                <span class="block text-brand-blue-50">successful e-commerce solutions</span>
              </h1>
              <p class="mt-3 text-base text-brand-cream sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We're a close-knit team of expert Shopify developers, designers and marketing strategists.
              </p>
              <div class="mt-10 sm:mt-12">
                <div class="sm:flex">
                  <div class="sm:w-1/3">
                    <a
                        href="#intro"
                        class="transition-all duration-300 ease-in-out block w-full py-3 px-4 border border-2 border-brand-red-900 rounded-md shadow bg-brand-red-900 text-white text-lg font-medium hover:bg-brand-red-500 hover:border-brand-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red-900"
                    >
                      Find out more
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3 sm:w-1/3">
                    <NuxtLink
                        to="/contact"
                        class="transition-all duration-300 ease-in-out block w-full py-3 px-4 rounded-md shadow border border-2 border-brand-cream font-bold text-brand-cream text-lg font-medium hover:bg-brand-cream hover:text-brand-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cream focus:ring-offset-gray-900"
                    >
                      Let's talk
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
import Vue from 'vue';
import { generateSocialMeta} from '~/lib/utils';

const title = 'Shopify design, migration & marketing in York and Leeds | Headless e-commerce | Ark Labs';
const description = 'At Ark Labs, we\'re a Shopify partner agency who build Shopify websites for clients in Selby, Leeds, York, Yorkshire';

export default Vue.extend({
  head() {
    return {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description
        },
        ...generateSocialMeta(title, description, this?.$route?.path),
      ]
    }
  }
});
</script>
