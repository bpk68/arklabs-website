<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Back to saftey!</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { generateSocialMeta} from '~/lib/utils';

const title = '404 page not found | Headless e-commerce | Ark Labs';
const description = 'Something went wrong whilst finding an page on the Ark Labs website.';

export default Vue.extend({
  props: ['error'],
  head() {
    return {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description
        },
        ...generateSocialMeta(title, description, '/error'),
      ]
    }
  }
});
</script>
