<template>
  <div
    class="
      flex-shrink-0 flex
      items-center
      justify-center
      w-16
      bg-pink-600
      text-white text-sm
      font-medium
      rounded-l-md
    "
  >
    GA
  </div>
  <div
    class="
      flex-1 flex
      items-center
      justify-between
      border-t border-r border-b border-gray-200
      bg-white
      rounded-r-md
      truncate
    "
  >
    <div class="flex-1 px-4 py-2 text-sm truncate">
      <a href="#" class="text-gray-900 font-medium hover:text-gray-600">
        GraphQL API
      </a>
      <p class="text-gray-500">12 Members</p>
    </div>
    <div class="flex-shrink-0 pr-2" ref="target">
      <button
        @click="toggleMenu()"
        type="button"
        class="
          w-8
          h-8
          bg-white
          inline-flex
          items-center
          justify-center
          text-gray-400
          rounded-full
          hover:text-gray-500
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-purple-500
        "
        id="pinned-project-options-menu-0-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span class="sr-only">Open options</span>
        <!-- Heroicon name: solid/dots-vertical -->
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
      </button>

      <!--
        Dropdown menu, show/hide based on menu state.
      -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-show="state.matches('visible')"
          class="
            z-10
            mx-3
            origin-top-right
            absolute
            right-10
            top-3
            w-48
            mt-1
            rounded-md
            shadow-lg
            bg-white
            ring-1 ring-black ring-opacity-5
            divide-y divide-gray-200
            focus:outline-none
          "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="pinned-project-options-menu-0-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="pinned-project-options-menu-0-item-0"
              >View</a
            >
          </div>
          <div class="py-1" role="none">
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="pinned-project-options-menu-0-item-1"
              >Removed from pinned</a
            >
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="pinned-project-options-menu-0-item-2"
              >Share</a
            >
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useGameMenuMachine } from '~/state/game-menu-machine'
  import { onClickOutside } from '@vueuse/core'

  const target = ref('')
  const toggleMenu = () => {
    send({ type: 'TOGGLE_GAME_MENU' })
  }

  const closeMenu = () => {
    send({ type: 'CLOSE_GAME_MENU' })
  }

  const { state, send } = useGameMenuMachine()

  onClickOutside(target, (event) => closeMenu())
</script>
