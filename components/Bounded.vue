<script setup lang="ts">
defineProps<{
  as?: string
}>();
</script>

<template>
  <Component
    :is="as || 'section'"
    class="px-4 py-10 md:py-14 md:px-6 lg:py-16"
  >
    <div class="max-w-6xl w-full mx-auto">
      <slot />
    </div>
  </Component>
</template>