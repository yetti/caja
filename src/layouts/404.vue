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
              {{ route.meta.title || 'Oops!' }}
            </h1>
          </div>
        </div>

        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useSidebarMachine } from '~/state/sidebar-machine'

  const route = useRoute()

  const { state, send } = useSidebarMachine()

  const toggleSidebar = () => {
    send({ type: 'TOGGLE_SIDEBAR' })
  }
  const closeSidebar = () => {
    send({ type: 'CLOSE_SIDEBAR' })
  }
</script>
