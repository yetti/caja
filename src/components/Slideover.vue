<template>
  <client-only>
    <transition
      enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
      appear
    >
      <div
        v-show="props.visible"
        class="fixed inset-0 overflow-hidden z-50 h-screen"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="absolute inset-0 overflow-hidden">
          <!-- Background overlay, show/hide based on slide-over state. -->
          <div class="absolute inset-0" aria-hidden="true">
            <div class="fixed inset-y-0 sm:pl-16 max-w-full right-0 flex">
              <OnClickOutside @trigger="closeSlideover">
                <!--
            Slide-over panel, show/hide based on slide-over state.
            -->
                <slot></slot>
              </OnClickOutside>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </client-only>
</template>

<script setup lang="ts">
  import { OnClickOutside } from '@vueuse/components'

  const props = defineProps<{
    visible: boolean
  }>()

  const emit = defineEmits<{
    (e: 'closeSlideover'): void
  }>()

  const closeSlideover = () => {
    emit('closeSlideover')
  }
</script>
