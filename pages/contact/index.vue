<template>
  <div>
    <div class="bg-brand-blue-900 text-brand-cream">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="font-bold text-white bg-brand-blue-400 rounded-2xl font-sans uppercase py-1 px-3 inline-block">Contact us</h1>
          <p class="mt-1 text-4xl font-extrabold sm:text-5xl lg:text-6xl font-title">How can we help you?</p>
          <p class="max-w-xl mt-5 mx-auto text-xl text-brand-blue-50">
            Talk to us about your next big idea, Shopify store, web app, or anything e-commerce.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-brand-cream py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div class="relative max-w-7xl mx-auto">
        <svg class="absolute left-full transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-red-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg class="absolute right-full bottom-0 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-red-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>

        <div class="shadow">
          <ContactForm />
        </div>
      </div>
    </div>

    <GlobalCtaDiscovery />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { generateSocialMeta} from '~/lib/utils';

const title = 'Contact Ark Labs | Shopify developer in York, Selby, Leeds and Hull';
const description = 'Contact Ark Labs, a specialist headless e-commerce developer in York. Let\'s talk about your next e-commerce project or Shopify website';

export default Vue.extend({
  head() {
    return {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        ...generateSocialMeta(title, description, this?.$route?.path)
      ]
    }
  }
});
</script>
