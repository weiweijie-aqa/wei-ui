<template>
  <button class="Wei-button" :class="`theme-${theme}`">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    theme: { type: String, default: 'button' },
  },

  setup(props, context) {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
