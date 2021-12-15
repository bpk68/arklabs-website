<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-brand-blue-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-brand-blue-900 sm:text-4xl">
          Recent work
        </h2>
        <p class="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4">
          We’re hugely proud of how we’ve worked with our clients to design and develop great-looking, responsive Shopify sites that convert.
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-for="post in posts" :key="post.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0 max-h-60 overflow-hidden">
            <img class="h-auto w-full object-top" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-brand-red-900">
                {{ post.category.name }}
              </p>
              <a :href="post.href" class="block mt-2" target="_blank">
                <h3 class="text-xl font-semibold text-brand-blue-900">
                  {{ post.title }}
                </h3>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center text-brand-blue-900">
             <a :href="post.href" target="_blank">
               Read more >
             </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const posts = [
  {
    title: 'Andrea Hall',
    href: 'https://andreahall.co.uk/',
    category: { name: 'Full bespoke design and build'},
    description:
        'We helped local Yorkshire artist, Andrea Hall, to combine and migrate her WordPress + Woocommerce, and Etsy stores to Shopify, designing and developing a minimalist theme that put her artwork front and centre.',
    imageUrl:'/recent-work/andrea-hall.jpg',
  },
  {
    title: 'Shepherds Purse Artisan Cheeses',
    href: 'https://www.shepherdspurse.co.uk/',
    category: { name: 'UX consultancy' },
    description:
        'Shepherds Purse were looking for help to improve their product UX and user purchase journey. We worked closely with the well-trafficked site to uplift sales and replace their outdated gift app with a modern one.',
    imageUrl: '/recent-work/shepherds-purse.jpg',
  },
  {
    title: 'Ashes With Art',
    href: 'https://www.asheswithart.co.uk/',
    category: { name: 'SEO and custom development' },
    description:
        'Ashes With Art engaged us to upgrade an existing Shopify theme, building out bespoke features and custom blocks. We designed and developed custom landing pages to support their ongoing SEO work.',
    imageUrl: '/recent-work/ashes-with-art.jpg',
  },
]

export default {
  data() {
    return {
      posts,
    }
  },
}
</script>
