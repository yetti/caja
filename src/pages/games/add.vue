<template>
  <div class="h-full">
    <div class="flex-1 overflow-y-auto">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<route lang="yaml">
meta:
  title: 'Add game'
  layout: default
</route>
