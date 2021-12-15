<template>
  <div class="bg-white pt-16 lg:py-24">
    <div class="pb-16 bg-brand-blue-400 lg:pb-0 lg:z-10 lg:relative">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="relative lg:-my-8">
          <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
          <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full bg-brand-red-400">
              <img class="object-cover lg:h-11/12 lg:w-full" src="/online-shopping-review.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">Don't just take our word for it</h2>
            <p class="my-4 pb-4 text-lg leading-6 text-cool-gray-300 border-b border-cool-gray-400">
              We pride ourselves on our work and that’s why our clients love us. But don’t just take our word for it.
            </p>

            <blockquote>
              <div>
                <svg class="h-16 w-16 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="mt-6 text-2xl font-medium text-white">
                  {{ testimonial.quote }}
                </p>
              </div>
              <footer class="mt-6 flex items-center">
                <div>
                  <img class="inline-block rounded-full w-16 border-4 shadow-md" :src="testimonial.image" :alt="`avatar of ${testimonial.name}`" />
                </div>
                <div class="ml-3">
                  <p class="text-xl font-medium text-white">{{testimonial.name}}</p>
                  <p class="text-base font-medium text-cool-gray-300">{{testimonial.title}}</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const testimonials = [
  {
    id: 1,
    name: 'Andrea Hall',
    title: 'Owner - Andrea Hall Design',
    image: '/testimonials/andrea-hall.jpeg',
    quote: 'Ark have been managing my website for years, but more recently I turned to them for a complete re-build to a bespoke e-commerce solution. I trust them implicitly to know what system is best for my business, and to simplify the process for me. It feels like a colleague relationship rather than a supplier, and the quality of support, and patience is invaluable',
  },
  {
    id: 2,
    name: 'Anne de Freyman',
    title: 'Director -  ADF Translate',
    image: '/testimonials/ann.jpeg',
    quote: 'I struggled for years to find the right team to build a website I would be proud of for my business. Until I met Rob at Ark Labs. I was impressed with Rob\'s creative talent and his patience. He built exactly the website I wanted and gave me all the help I needed to make it work. Superlative customer service!',
  },
  {
    id: 3,
    name: 'Claire Horsfield',
    title: 'MD - CH Consultancy',
    image: '/testimonials/claire.jpeg',
    quote: 'Ark helped me setup HubSpot and integrate it with my website. Their work is professional and to a high standard, always being completed quickly. They helped me learn the new software quickly.',
  },
  {
    id: 4,
    name: 'Heidi Green',
    title: 'Selby Council',
    image: '/testimonials/heidi.jpeg',
    quote: 'Rarely do you meet a team who gives so generously of their knowledge, sharing so much information to help others achieve their goals. Rob and the Ark Labs team are an inspiration in their approach, taking the fear out of what sometimes seems an overwhelming task. Professional, approachable, innovative, what more can I say!',
  },
  {
    id: 5,
    name: 'Derek Thompson',
    title: 'Director - Surf Classic',
    image: '/testimonials/sc-logo-1.png',
    quote: 'Surf Classic has been working with Ark Labs since our "Get Go" and despite us being a smaller company with limited in house IT experience, have received the best advice, technical support and most importantly positive personal input from Ark Labs.',
  },
  {
    id: 6,
    name: 'Hannah Thorpe',
    title: 'Founder - Verkeer',
    image: '/testimonials/hannah.png',
    quote: 'Rob and the Ark team are a pleasure to work with - so responsive, quality work and happy to take the time to explain anything we needed. Would 100% recommend.',
  }
];

export default {
  data() {
    return {
      testimonials,
    };
  },
  computed: {
    testimonial: function() {
      return this.testimonials[Math.random() * this.testimonials.length | 0];
    }
  }
}
</script>
