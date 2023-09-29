<template>
  <div>
    <div
      class="pt-10 bg-brand-purple-900 sm:pt-16 lg:pt-8 lg:pb-14 md:overflow-hidden"
    >
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
          >
            <div class="lg:py-24">
              <h1
                class="mt-4 text-4xl font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl"
              >
                <span class="block"
                  >A Yorkshire
                  <span class="underline" style="text-decoration-color: #e62b4a"
                    >Shopify agency</span
                  >
                  who create</span
                >
                <span class="block text-brand-blue-400"
                  >e-commerce solutions that convert</span
                >
              </h1>
              <p
                class="mt-3 text-base text-brand-cream sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
              >
                We're a close-knit team of expert Shopify developers, designers
                and marketing strategists.
              </p>
              <div class="mt-10 sm:mt-12">
                <div class="sm:flex sm:justify-center lg:justify-start">
                  <div class="sm:w-1/3">
                    <a
                      href="#intro"
                      class="btn btn-pink block w-full py-3 px-4"
                    >
                      Find out more
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3 sm:w-1/3">
                    <NuxtLink
                      to="/contact"
                      class="btn btn-outline block w-full py-3 px-4"
                    >
                      Let's talk
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div
              class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
            >
              <img
                class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/online-shopping.svg"
                alt="K-Tech Shopify Experts displaying an e-commerce website on a mobile device"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <HomeIntro />
    <HomeCaseStudies />
    <ServicesBlock />
    <Partnerships />
    <OurApproach />
    <PartnersBlock />
    <Testimonials />
    <RecentWork />
    <GlobalCta />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { generateSocialMeta } from '~/lib/utils';

const title =
  'Shopify design, migration & marketing in York and Leeds | Headless e-commerce | K-Tech';
const description =
  "At K-Tech, we're a Shopify partner agency who build Shopify websites for clients in Wakefield, Leeds, York, Yorkshire";

export default Vue.extend({
  head() {
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        ...generateSocialMeta(title, description, this?.$route?.path),
      ],
    };
  },
});
</script>
