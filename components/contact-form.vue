<template>
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2 class="text-2xl font-extrabold text-brand-blue-900 sm:text-3xl">
            Get in touch
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            We're always happy to hear from new and existing clients. Drop us a line below and we'll be in touch within one business day.
          </p>
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">Office</dt>
              <dd>
                <p>50 Micklegate</p>
                <p>Selby</p>
                <p>YO8 4EQ</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Phone number</dt>
              <dd class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="ml-3">
                  +44 (0)1757 826969
                </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <span class="ml-3">
                  hello@ark-labs.co.uk
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form action="/contact/thankyou/" method="POST" name="contact-form" class="grid grid-cols-1 gap-y-6" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact-form" />
            <div>
              <label for="full-name" class="block text-sm font-medium text-gray-700">name <span class="text-brand-red-700">(*)</span></label>
              <div class="mt-1">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autocomplete="name"
                  class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue-400 focus:border-brand-blue-400 border-gray-300 rounded-md"
                  placeholder="Alice Smith"
                  required
                />
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">email address <span class="text-brand-red-700">(*)</span></label>
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue-400 focus:border-brand-blue-400 border-gray-300 rounded-md"
                  placeholder="alice@mywebsite.com"
                  required
                />
              </div>
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">contact number</label>
              <div class="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue-400 focus:border-brand-blue-400 border-gray-300 rounded-md"
                  placeholder="07732 567 890"
                />
              </div>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">your message <span class="text-brand-red-700">(*)</span></label>
              <div class="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue-400 focus:border-brand-blue-400 border border-gray-300 rounded-md"
                  placeholder="e.g. as much detail about your project and how we can help as possible"
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit" class="inline-flex justify-center py-3 px-6 border transition transition-colors duration-300 ease-in-out border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-red-900 hover:bg-brand-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red-900">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
