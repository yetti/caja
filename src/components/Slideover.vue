<template>
  <transition
    enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
    enter-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
    leave-class="translate-x-0"
    leave-to-class="translate-x-full"
    appear
  >
    <div
      v-show="props.visible"
      class="fixed inset-0 overflow-hidden z-50"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background overlay, show/hide based on slide-over state. -->
        <div class="absolute inset-0" aria-hidden="true">
          <div class="fixed inset-y-0 pl-16 max-w-full right-0 flex">
            <!--
            Slide-over panel, show/hide based on slide-over state.
            -->
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core'

  const target = ref('')
  const props = defineProps<{
    visible: boolean
  }>()

  const emit = defineEmits<{
    (e: 'closeSlideover'): void
  }>()

  const closeSlideover = () => {
    emit('closeSlideover')
  }

  onClickOutside(target, (event) => closeSlideover())
</script>
