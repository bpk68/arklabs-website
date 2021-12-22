<template>
  <div>
    <div class="bg-brand-blue-900 text-brand-cream">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="font-bold text-white bg-brand-blue-400 rounded-2xl font-sans uppercase py-1 px-3 inline-block">About Ark Labs</h1>
          <p class="mt-1 text-4xl font-extrabold sm:text-5xl lg:text-6xl font-title">Meet your new Shopify partner</p>
          <p class="max-w-xl mt-5 mx-auto text-xl text-brand-blue-50">
            We're a Yorkshire-based Shopify agency with clients across the UK and United States.
          </p>
        </div>
      </div>
    </div>

    <div class="relative bg-white py-16 sm:py-24">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div class="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div class="absolute inset-y-0 right-1/2 w-full bg-brand-red-50 rounded-r-3xl lg:right-72" />
            <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            <!-- Testimonial card-->
            <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img class="absolute inset-0 h-full w-full object-cover" src="/profiles/andrea-hall.jpeg" alt="Andrea Hall Shopify website screenshot" />
              <div class="absolute inset-0 bg-brand-red-400 mix-blend-multiply" />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-red-500 via-brand-red-500 opacity-90" />
              <div class="relative px-8">
                <blockquote class="mt-8">
                  <div class="relative text-lg font-medium text-white md:flex-grow">
                    <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-brand-red-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p class="relative">
                      Ark have been managing my website for years. I trust them implicitly to know what system is best
                      for my business, and to simplify the process for me. It feels like a colleague relationship
                      rather than a supplier, and the quality of support, and patience is invaluable.
                    </p>
                  </div>

                  <footer class="mt-4">
                    <p class="text-base font-semibold text-brand-red-400">Andrea Hall, owner at Andrea Hall Design</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <!-- Content area -->
          <div class="pt-12 sm:pt-16 lg:pt-20">
            <h2 class="text-3xl font-extrabold text-brand-blue-900 sm:text-4xl">
              On a mission to provide better e-commerce experiences for all
            </h2>
            <div class="mt-6 text-gray-500 space-y-6">
              <p class="text-lg">
                Ark Labs was founded on the belief that e-commerce could be better. From winning customer experiences
                that support your new e-commerce business, to the best client support around, we're here to help you launch
                your next e-commerce store.
              </p>
              <p class="text-base leading-7">
                As a Shopify partner, our bread and butter is e-commerce stores built on the Shopify platform, but we're
                a big supporter of e-commerce in general and can work towards a custom solution for you whether that's
                migration from one platform to another, exploring headless e-commerce options, or even a simplified
                solution using a detached storefront, such as Snipcart.
              </p>
              <p class="text-base leading-7">
                We're remote-first and based in the UK, working with a community of multi-talented creative people,
                each with a passion for first-class e-commerce development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-brand-blue-400">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white">
          Frequently asked questions
        </h2>
        <div class="mt-6 border-t border-brand-blue-50 pt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            <div v-for="faq in faqs" :key="faq.id">
              <dt class="text-lg leading-6 font-medium text-white">
                {{ faq.question }}
              </dt>
              <dd class="mt-2 text-base text-cool-gray-300">
                {{ faq.answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div class="space-y-5 sm:space-y-4">
            <h2 class="text-3xl font-extrabold text-brand-blue-900 sm:text-4xl">Our team</h2>
            <p class="text-xl text-gray-500">
              Meet your creative e-commerce team of Shopify developers, designers and strategists.
            </p>
          </div>
          <div class="lg:col-span-2">
            <ul role="list" class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              <li v-for="person in people" :key="person.name" class="sm:py-8">
                <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img class="object-cover shadow-lg rounded-lg" :src="person.imageUrl" alt="" />
                  </div>
                  <div class="sm:col-span-2">
                    <div class="space-y-4">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3 class="text-brand-blue-900">{{ person.name }}</h3>
                        <p class="text-brand-blue-400">{{ person.role }}</p>
                      </div>
                      <div class="text-lg text-gray-500 prose prose-brand prose-lg" v-html="person.bio" />
                      <ul role="list" class="flex space-x-5">
                        <li>
                          <a :href="person.twitterUrl" class="text-gray-400 hover:text-gray-500" target="_blank">
                            <span class="sr-only">Twitter</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500" target="_blank">
                            <span class="sr-only">LinkedIn</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a :href="person.websiteUrl" class="text-gray-400 hover:text-gray-500" target="_blank">
                            <span class="sr-only">Personal website</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>





    <GlobalCta />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { generateSocialMeta} from '~/lib/utils';

const title = 'About Ark Labs, Shopify e-commerce agency | Shopify websites in York, Leeds, Hull';
const description = 'We\'re Ark Labs, a Shopify partner and agency specialising in headless e-commerce websites. We work with clients remotely from our offices in Selby, York, North Yorkshire';
const people = [
  {
    name: 'Rob Kendal',
    role: 'Founder / Managing Director',
    imageUrl:
        '/profiles/rob-kendal.jpeg',
    bio:
        `
          <p>Rob has close to two decades in web development and e-commerce, starting in the early days of the web,
          building internal web apps and dedicated systems for the NHS, through to developing marketing-led websites
          for organisations such as North Yorkshire County Council.</p>
          <p>Beyond founding and running Ark Labs, Rob can be found creating helpful content on Shopify, the Jamstack, and modern
          web development practices. He's also a published author on subjects such as Beginners Guide to React.</p>
          <p>You can read more about Rob on his own <a href="https://robkendal.co.uk/" target="_blank">dedicated website</a></p>
        `,
    twitterUrl: 'https://twitter.com/kendalmintcode',
    linkedinUrl: 'https://www.linkedin.com/in/robkendal/',
    websiteUrl: 'https://robkendal.co.uk',
  }
];

const faqs = [
  {
    id: 1,
    question: "Do you outsource projects or development work?",
    answer:
        `All of our development work is carried out by our in-house development team based in the UK. We may work with
        some carefully selected and trusted freelance partners on certain projects depending on project needs.`,
  },
  {
    id: 2,
    question: "Can you make a list of changes to an existing Shopify site?",
    answer:
        `Sure can! We offer a couple of options for ad-hoc work, from ongoing monthly retainers, to a block booking of
        time that can be used on a more as-hoc basis.`,
  },
  {
    id: 3,
    question: "How will we communicate on our project?",
    answer:
        `We like to keep things asynchronous, meaning we use tools like Slack and Height to communicate at times when
        we're both free. It also helps to keep everything in one place so nothing gets lost in long email threads.`,
  },
  {
    id: 4,
    question: "How much do you charge for XYZ?",
    answer:
        `Truthfully....it depends! It's a vague answer to a tough question, but it varies so much between each client
         and each project and what the requirements are. As a rough guide, however, custom-built Shopify stores tend
         to live in the £9-£15K region, fully customised with bespoke designs.`,
  },
]

export default Vue.extend({
  data() {
    return {
      people,
      faqs,
    };
  },
  head() {
    return {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description
        },
        ...generateSocialMeta(title, description, this?.$route?.path)
      ]
    }
  }
});
</script>
