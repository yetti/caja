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
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<route lang="yaml">
meta:
  title: 'Add game'
  layout: default
</route>
