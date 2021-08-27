<template>
  <div class="h-full">
    <form class="h-full divide-y divide-gray-200 flex flex-col bg-white">
      <div class="flex-1 h-0 overflow-y-auto">
        <div class="py-6 px-4 bg-gray-100 sm:px-6">
          <div class="mt-1">
            <p class="text-sm text-gray-700">
              Get started by entering a game's name.
            </p>
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-between">
          <div class="px-4 sm:px-6">
            <GameSearch></GameSearch>
            <div class="relative mt-10 mb-10">
              <div
                class="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center">
                <button
                  type="button"
                  class="
                    inline-flex
                    items-center
                    shadow-sm
                    px-4
                    py-1.5
                    border border-gray-300
                    text-sm
                    leading-5
                    font-medium
                    rounded-full
                    text-gray-700
                    bg-white
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                >
                  <span>See all results</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  const search = () => {
    console.log('searching...')
  }
</script>

<route lang="yaml">
meta:
  title: 'Add game'
  layout: default
</route>
