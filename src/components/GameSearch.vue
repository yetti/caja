<template>
  <div class="space-y-6 pt-6 pb-5">
    <div>
      <label for="game-name" class="block text-sm font-medium text-gray-700"
        >Name</label
      >
      <div class="mt-1 flex rounded-md shadow-sm">
        <div class="relative flex items-stretch flex-grow focus-within:z-10">
          <input
            v-model="gameName"
            type="text"
            name="game-name"
            id="game-name"
            class="
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              rounded-none rounded-l-md
              sm:text-sm
              border-gray-300
            "
            placeholder="Carcassonne"
          />
        </div>
        <button
          @click="search"
          type="button"
          class="
            -ml-px
            relative
            inline-flex
            items-center
            space-x-2
            px-4
            py-2
            border border-gray-300
            text-sm
            font-medium
            rounded-r-md
            text-gray-700
            bg-gray-50
            hover:bg-gray-100
            focus:outline-none
            focus:ring-1
            focus:ring-indigo-500
            focus:border-indigo-500
          "
        >
          <!-- Heroicon name: solid/search -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Search</span>
        </button>
      </div>
    </div>
  </div>
  <div class="mt-10">
    <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
      Search Results ({{ response.total }})
    </h3>
    <ul
      v-if="hasSearchResults()"
      role="list"
      class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
    >
      <SearchResultItem
        v-for="item in response.item"
        :item="item"
      ></SearchResultItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import SearchResultItem from '~/components/SearchResultItem.vue'
  import ky from 'ky'
  import { SearchResult } from '~/models/search'

  let gameName = ref('')

  let response = ref<SearchResult>({
    total: '0',
    termsofuse: '',
    item: [],
  })

  const search = async () => {
    response.value = {
      total: '0',
      termsofuse: '',
      item: [],
    }

    const res: SearchResult = await ky
      .get(`/api/search-bgg?name=${gameName.value}`)
      .json()

    response.value = res
  }

  const hasSearchResults = () => {
    return response.value.item && response.value.item.length > 0
  }
</script>
