<template>
  <li class="py-4 flex items-center justify-between space-x-3">
    <div class="min-w-0 flex-1 flex items-center space-x-3">
      <div class="min-w-0 flex-1">
        <p class="text-sm font-medium text-gray-900 truncate">
          {{ itemName }}
        </p>
        <p class="text-sm font-medium text-gray-500 truncate">
          {{ itemType }}
        </p>
      </div>
    </div>
    <div class="flex-shrink-0">
      <button
        type="button"
        class="
          inline-flex
          items-center
          py-2
          px-2
          xl:px-3
          mx-1
          border border-transparent
          rounded-full
          bg-gray-100
          hover:bg-gray-200
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        <!-- Heroicon name: solid/plus-sm -->
        <svg
          class="ml-0.5 xl:-ml-1 mr-0.5 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-sm font-medium text-gray-900 hidden xl:block">
          Add <span class="sr-only">{{ itemName }}</span>
        </span>
      </button>
      <button
        type="button"
        class="
          inline-flex
          items-center
          py-2
          px-2
          xl:px-3
          mx-1
          border border-transparent
          rounded-full
          bg-gray-100
          hover:bg-gray-200
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        <!-- Heroicon name: outline/eye -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ml-0.5 xl:-ml-1 mr-0.5 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <span class="text-sm font-medium text-gray-900 hidden xl:block">
          View <span class="sr-only">{{ itemName }}</span>
        </span>
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
  import { decode } from 'html-entities'
  import { SearchResultItem } from '~/models/search'

  const props = defineProps<{
    item: SearchResultItem
  }>()

  const itemName = ref(decode(props.item.name.value))
  const itemType = ref(props.item.type)
</script>
