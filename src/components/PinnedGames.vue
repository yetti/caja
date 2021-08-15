<template>
  <div class="px-4 mt-6 sm:px-6 lg:px-8">
    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
      Pinned Games
    </h2>
    <ul
      class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3"
    >
      <li class="relative col-span-1 flex shadow-sm rounded-md">
        <PinnedGame></PinnedGame>
      </li>

      <!-- More items... -->
    </ul>
  </div>
</template>
