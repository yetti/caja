<template>
  <div class="relative h-screen flex overflow-hidden bg-white">
    <!-- off-canvas slide over -->
    <Slideover
      :visible="slideoverState.matches('visible')"
      @close-slideover="closeSlideover()"
    >
      <div class="w-screen max-w-md h-full">
        <div
          class="
            h-full
            divide-y divide-gray-200
            flex flex-col
            bg-white
            shadow-xl
          "
        >
          <div class="flex-1 h-0 overflow-y-auto">
            <div class="py-6 px-4 bg-indigo-700 sm:px-6">
              <div class="flex items-center justify-between">
                <h2
                  class="text-lg font-medium text-white"
                  id="slide-over-title"
                >
                  Quick Add
                </h2>
                <div class="ml-3 h-7 flex items-center">
                  <button
                    @click="closeSlideover()"
                    type="button"
                    class="
                      bg-indigo-700
                      rounded-md
                      text-indigo-200
                      hover:text-white
                      focus:outline-none focus:ring-2 focus:ring-white
                    "
                  >
                    <span class="sr-only">Close panel</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-1">
                <p class="text-sm text-indigo-300">
                  Get started by entering the game name.
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
      </div>
    </Slideover>
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <SidebarMobile
      :visible="sidebarState.matches('visible')"
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
              @click="showSlideover()"
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
              Add
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
  import { useSlideoverMachine } from '~/state/slideover-machine'

  const { state: sidebarState, send: sidebarSend } = useSidebarMachine()
  const { state: slideoverState, send: slideoverSend } = useSlideoverMachine()

  const toggleSidebar = () => {
    sidebarSend({ type: 'TOGGLE_SIDEBAR' })
  }
  const closeSidebar = () => {
    sidebarSend({ type: 'CLOSE_SIDEBAR' })
  }

  const showSlideover = () => {
    slideoverSend({ type: 'SHOW_SLIDEOVER' })
  }
  const closeSlideover = () => {
    slideoverSend({ type: 'CLOSE_SLIDEOVER' })
  }
</script>
