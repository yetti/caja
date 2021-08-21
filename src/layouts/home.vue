<template>
  <div class="relative h-screen flex overflow-hidden bg-white">
    <!-- off-canvas slide over -->
    <Slideover
      :visible="slideoverState.matches('visible')"
      @close-slideover="closeSlideover()"
    >
      <div class="w-screen max-w-md h-full">
        <form
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
                  Add Game
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
                  Get started by entering the game name or game ID.
                </p>
              </div>
            </div>
            <div class="flex-1 flex flex-col justify-between">
              <div class="px-4 sm:px-6">
                <div class="space-y-6 pt-6 pb-5">
                  <div>
                    <label
                      for="game-name"
                      class="block text-sm font-medium text-gray-700"
                      >Name</label
                    >
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <div
                        class="
                          relative
                          flex
                          items-stretch
                          flex-grow
                          focus-within:z-10
                        "
                      >
                        <input
                          type="text"
                          name="game-name"
                          id="game-name"
                          class="
                            focus:ring-indigo-500 focus:border-indigo-500
                            block
                            w-full
                            rounded-none rounded-l-md
                            sm:text-sm
                            border-gray-300
                          "
                          placeholder="Carcassonne"
                        />
                      </div>
                      <button
                        type="button"
                        class="
                          -ml-px
                          relative
                          inline-flex
                          items-center
                          space-x-2
                          px-4
                          py-2
                          border border-gray-300
                          text-sm
                          font-medium
                          rounded-r-md
                          text-gray-700
                          bg-gray-50
                          hover:bg-gray-100
                          focus:outline-none
                          focus:ring-1
                          focus:ring-indigo-500
                          focus:border-indigo-500
                        "
                      >
                        <!-- Heroicon name: solid/search -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-10">
                  <h3
                    class="
                      text-xs
                      font-semibold
                      text-gray-500
                      uppercase
                      tracking-wide
                    "
                  >
                    Search Results (10)
                  </h3>
                  <ul
                    role="list"
                    class="
                      mt-4
                      border-t border-b border-gray-200
                      divide-y divide-gray-200
                    "
                  >
                    <li
                      class="py-4 flex items-center justify-between space-x-3"
                    >
                      <div class="min-w-0 flex-1 flex items-center space-x-3">
                        <div class="min-w-0 flex-1">
                          <p class="text-sm font-medium text-gray-900 truncate">
                            Carcassonne
                          </p>
                          <p class="text-sm font-medium text-gray-500 truncate">
                            Front-end Developer
                          </p>
                        </div>
                      </div>
                      <div class="flex-shrink-0">
                        <button
                          type="button"
                          class="
                            inline-flex
                            items-center
                            py-2
                            px-2
                            xl:px-3
                            mx-1
                            border border-transparent
                            rounded-full
                            bg-gray-100
                            hover:bg-gray-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-indigo-500
                          "
                        >
                          <!-- Heroicon name: solid/plus-sm -->
                          <svg
                            class="ml-0.5 xl:-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              hidden
                              xl:block
                            "
                          >
                            Add <span class="sr-only">Carcassonne</span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
                            inline-flex
                            items-center
                            py-2
                            px-2
                            xl:px-3
                            mx-1
                            border border-transparent
                            rounded-full
                            bg-gray-100
                            hover:bg-gray-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-indigo-500
                          "
                        >
                          <!-- Heroicon name: outline/eye -->
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-0.5 xl:-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          <span
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              hidden
                              xl:block
                            "
                          >
                            View <span class="sr-only">Carcassonne</span>
                          </span>
                        </button>
                      </div>
                    </li>

                    <li
                      class="py-4 flex items-center justify-between space-x-3"
                    >
                      <div class="min-w-0 flex-1 flex items-center space-x-3">
                        <div class="min-w-0 flex-1">
                          <p class="text-sm font-medium text-gray-900 truncate">
                            Carcassonne
                          </p>
                          <p class="text-sm font-medium text-gray-500 truncate">
                            Front-end Developer
                          </p>
                        </div>
                      </div>
                      <div class="flex-shrink-0">
                        <button
                          type="button"
                          class="
                            inline-flex
                            items-center
                            py-2
                            px-2
                            xl:px-3
                            mx-1
                            border border-transparent
                            rounded-full
                            bg-gray-100
                            hover:bg-gray-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-indigo-500
                          "
                        >
                          <!-- Heroicon name: solid/plus-sm -->
                          <svg
                            class="ml-0.5 xl:-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              hidden
                              xl:block
                            "
                          >
                            Add <span class="sr-only">Carcassonne</span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
                            inline-flex
                            items-center
                            py-2
                            px-2
                            xl:px-3
                            mx-1
                            border border-transparent
                            rounded-full
                            bg-gray-100
                            hover:bg-gray-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-indigo-500
                          "
                        >
                          <!-- Heroicon name: outline/eye -->
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-0.5 xl:-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          <span
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              hidden
                              xl:block
                            "
                          >
                            View <span class="sr-only">Carcassonne</span>
                          </span>
                        </button>
                      </div>
                    </li>

                    <li
                      class="py-4 flex items-center justify-between space-x-3"
                    >
                      <div class="min-w-0 flex-1 flex items-center space-x-3">
                        <div class="min-w-0 flex-1">
                          <p class="text-sm font-medium text-gray-900 truncate">
                            Carcassonne
                          </p>
                          <p class="text-sm font-medium text-gray-500 truncate">
                            Front-end Developer
                          </p>
                        </div>
                      </div>
                      <div class="flex-shrink-0">
                        <button
                          type="button"
                          class="
                            inline-flex
                            items-center
                            py-2
                            px-2
                            xl:px-3
                            mx-1
                            border border-transparent
                            rounded-full
                            bg-gray-100
                            hover:bg-gray-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-indigo-500
                          "
                        >
                          <!-- Heroicon name: solid/plus-sm -->
                          <svg
                            class="ml-0.5 xl:-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              hidden
                              xl:block
                            "
                          >
                            Add <span class="sr-only">Carcassonne</span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="
                            inline-flex
                            items-center
                            py-2
                            px-2
                            xl:px-3
                            mx-1
                            border border-transparent
                            rounded-full
                            bg-gray-100
                            hover:bg-gray-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-indigo-500
                          "
                        >
                          <!-- Heroicon name: outline/eye -->
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-0.5 xl:-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          <span
                            class="
                              text-sm
                              font-medium
                              text-gray-900
                              hidden
                              xl:block
                            "
                          >
                            View <span class="sr-only">Carcassonne</span>
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="relative mt-10 mb-10">
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center">
                    <button
                      type="button"
                      class="
                        inline-flex
                        items-center
                        shadow-sm
                        px-4
                        py-1.5
                        border border-gray-300
                        text-sm
                        leading-5
                        font-medium
                        rounded-full
                        text-gray-700
                        bg-white
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-indigo-500
                      "
                    >
                      <span>See all results</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
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
