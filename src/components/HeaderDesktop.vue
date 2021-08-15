<template>
  <div
    class="
      border-b border-gray-200
      px-4
      py-4
      sm:flex sm:items-center sm:justify-between sm:px-6
      lg:px-8
    "
  >
    <div class="flex-1 min-w-0">
      <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
        {{ route.meta.title || 'Caja' }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>
