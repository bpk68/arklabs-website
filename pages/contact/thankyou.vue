<template>
  <div>
    <div class="bg-brand-purple-900 text-brand-cream">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1
            class="font-bold text-brand-purple-900 bg-brand-pink-400 rounded-2xl font-sans uppercase py-1 px-3 inline-block mb-2"
          >
            Thank you
          </h1>
          <p
            class="mt-1 text-4xl font-extrabold sm:text-5xl lg:text-6xl font-title"
          >
            Exciting times ahead
          </p>
          <p class="max-w-xl mt-5 mx-auto text-xl text-brand-cream">
            We've got your details and we'll be in touch shortly.
          </p>
        </div>
      </div>
    </div>
    <div
      class="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-brand-cream overflow-hidden"
    >
      <div class="max-w-max lg:max-w-7xl mx-auto">
        <div class="relative">
          <svg
            class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
                  class="text-brand-pink-100/50"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
                  class="text-brand-pink-100/50"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div class="relative md:bg-brand-cream md:p-6">
            <div class="prose prose-brand prose-lg text-gray-500 lg:max-w-none">
              <h2>We're at the start of something big</h2>

              <p>
                Thanks for reaching out, we'll be in touch within one business
                day to discuss your Shopify or website project. We're looking
                forward to working with you.
              </p>

              <p>
                In the meantime you've got a few options to choose your own
                digital adventure:
              </p>

              <ul>
                <li>
                  You can <NuxtLink to="/">return to the home page</NuxtLink>
                </li>
                <li>
                  Start filling out our
                  <a href="https://tally.so/r/mOANkw" target="_blank"
                    >5 minute discovery quiz</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <GlobalCtaDiscovery />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { generateSocialMeta } from '~/lib/utils';

const title =
  'Thank you for contacting K-Tech | A Shopify agency in York, Leeds';
const description =
  'Thank you for contacting K-Tech. One of our team will be in contact with you shortly about your next Shopify e-commerce project.';

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
        ...generateSocialMeta(title, description, this?.$route?.path || ''),
      ],
    };
  },
});
</script>
