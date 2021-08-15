<template>
  <div class="relative h-screen flex overflow-hidden bg-white">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <SidebarMobile
      :visible="state.matches('visible')"
      @close-sidebar="closeSidebar()"
    ></SidebarMobile>

    <!-- Static sidebar for desktop -->
    <SidebarDesktop></SidebarDesktop>
    <!-- Main column -->
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <!-- Search header -->
      <HeaderMobile @toggle-sidebar="toggleSidebar()"></HeaderMobile>
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <!-- Page title & actions -->
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
              Home
            </h1>
          </div>
          <div class="mt-4 flex sm:mt-0 sm:ml-4">
            <button
              type="button"
              class="
                order-1
                ml-3
                inline-flex
                items-center
                px-4
                py-2
                border border-gray-300
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-gray-700
                bg-white
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-purple-500
                sm:order-0 sm:ml-0
              "
            >
              Share
            </button>
            <button
              type="button"
              class="
                order-0
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-purple-600
                hover:bg-purple-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-purple-500
                sm:order-1 sm:ml-3
              "
            >
              Create
            </button>
          </div>
        </div>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useSidebarMachine } from '~/state/sidebar-machine'

  const { state, send } = useSidebarMachine()

  const toggleSidebar = () => {
    send({ type: 'TOGGLE_SIDEBAR' })
  }
  const closeSidebar = () => {
    send({ type: 'CLOSE_SIDEBAR' })
  }
</script>
