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
        <HeaderDesktop></HeaderDesktop>>

        <div class="px-4 mt-6 sm:px-6 lg:px-8">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useSidebarMachine } from '~/state/sidebar-machine'

  const persistedState = JSON.parse(
    localStorage.getItem('user-menu-state') ?? '{}'
  )

  const { state, send, service } = useSidebarMachine({ state: persistedState })
  service.onTransition((state) => {
    localStorage.setItem('sidebar-state', JSON.stringify(state))
  })

  const toggleSidebar = () => {
    send({ type: 'TOGGLE_SIDEBAR' })
  }
  const closeSidebar = () => {
    send({ type: 'CLOSE_SIDEBAR' })
  }
</script>
