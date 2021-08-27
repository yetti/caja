<template>
  <div class="mt-10">
    <h3
      class="
        text-xs
        font-semibold
        text-gray-500
        uppercase
        tracking-wide
      "
    >
      Search Results ({{ props.results.total }})
    </h3>
    <ul
      role="list"
      class="
        mt-4
        border-t border-b border-gray-200
        divide-y divide-gray-200
      "
    >
      <SearchResultItem v-for="item in props.results.item" :item="item"></SearchResultItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { SearchResult } from '~/models/search'

  const props = defineProps<{
    results: SearchResult
  }>()
</script>
