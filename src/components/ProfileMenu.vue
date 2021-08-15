<template>
  <div class="ml-3 relative" ref="target">
    <div>
      <button
        @click="toggleMenu()"
        type="button"
        class="
          max-w-xs
          bg-white
          flex
          items-center
          text-sm
          rounded-full
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-purple-500
        "
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>

    <!--
      Dropdown menu, show/hide based on menu state.
    -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="state.matches('visible')"
        class="
          origin-top-right
          absolute
          right-0
          mt-2
          w-48
          rounded-md
          shadow-lg
          bg-white
          ring-1 ring-black ring-opacity-5
          divide-y divide-gray-200
          focus:outline-none
        "
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
            >View profile</a
          >
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-1"
            >Settings</a
          >
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-2"
            >Notifications</a
          >
        </div>
        <div class="py-1" role="none">
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-3"
            >Get desktop app</a
          >
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-4"
            >Support</a
          >
        </div>
        <div class="py-1" role="none">
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-5"
            >Logout</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useProfileMenuMachine } from '~/state/profile-menu-machine'
  import { onClickOutside } from '@vueuse/core'

  const target = ref('')
  const toggleMenu = () => {
    send({ type: 'TOGGLE_PROFILE_MENU' })
  }

  const closeMenu = () => {
    send({ type: 'CLOSE_PROFILE_MENU' })
  }

  const { state, send } = useProfileMenuMachine()

  onClickOutside(target, (event) => closeMenu())
</script>
