<template>
  <header class="bg-brand-blue-900 relative">
    <div class="bg-brand-blue-900 py-6">
      <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div class="flex items-center justify-between flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <NuxtLink to="/">
              <span class="sr-only">Ark Labs: Shopify experts in Yorkshire</span>
              <img class="h-16 sm:w-auto" src="/logos/3.svg" alt="Ark Labs logo" />
            </NuxtLink>
            <div class="-mr-2 flex items-center md:hidden">
              <div
                ref="showMenuButton"
                class="rounded-md p-2 inline-flex items-center justify-center text-brand-blue-50 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                @click="toggleMenu"
              >
                <span class="sr-only">Open main menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>
          </div>
          <div class="hidden space-x-8 md:flex md:justify-end md:mr-8">
            <NuxtLink
                v-for="item in navigation"
                :to="item.href"
                :key="item.name"
                class="text-base font-medium text-lg text-brand-blue-50 hover:text-brand-cream transition-colors duration-300 ease-in-out"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-6">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center px-4 py-1 border border-transparent text-lg font-medium rounded-md text-white bg-brand-red-900 hover:bg-brand-red-500 transition-all duration-300 ease-in-out">
            <span class="mr-3">Let's talk</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </NuxtLink>
        </div>
      </nav>
    </div>

    <div
      class="absolute top-0 inset-x-0 p-2 transition transition-all transform ease-out duration-150 origin-top md:hidden overflow-hidden"
      :class="[showMenu ? menuVisibleClass : menuInvisibleClass]"
      v-closeable="{
        exclude: ['showMenuButton'],
        handler: 'closeMenu'
      }"
    >
      <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-3 pt-4 flex items-center justify-between">
          <div>
            <NuxtLink to="/">
              <span class="sr-only">Ark Labs: Shopify developer in Yorkshire</span>
              <img class="h-16 w-auto" src="/logos/2.svg" alt="Ark Labs logo" />
            </NuxtLink>
          </div>
          <div class="">
            <div
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              @click="toggleMenu"
            >
              <span class="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
        <div class="pt-5 pb-6">
          <div class="px-2 space-y-1">
            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">{{ item.name }}</NuxtLink>
          </div>
          <div class="mt-6 px-5">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center w-full px-4 py-1 border border-transparent text-lg font-medium rounded-md text-white bg-brand-red-900 hover:bg-brand-red-500 transition-all duration-300 ease-in-out">
              <span class="mr-3">Let's talk</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue';
const navigation = [
  { name: 'Case studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]
let showMenu = false;
let handleOutsideClick;

Vue.directive('closeable', {
  bind(el, binding, vnode) {
    handleOutsideClick = e => {
      e.stopPropagation();
      const { handler, exclude } = binding.value;

      let clickedOnExcludedEl = false;
      exclude.forEach(refName => {
        if(!clickedOnExcludedEl) {
          const excludedEl = vnode.context.$refs[refName];
          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      });

      if(!el.contains(e.target) && !clickedOnExcludedEl) {
        vnode.context[handler]();
      }
    }

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
  },

  unbind() {
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideClick);
  }
});


export default {
  data() {
    return {
      navigation,
      showMenu,
      menuVisibleClass: 'opacity-100 scale-100 z-10 visible',
      menuInvisibleClass: 'opacity-0 scale-95 z-0 invisible',
    }
  },
  mounted() {
    this.showMenu = false;
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    }
  },
  watch: {
    $route() {
      this.showMenu = false;
    }
  }
}
</script>
