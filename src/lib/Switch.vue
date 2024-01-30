<template>
  <button @click="toggle" :class="{ checked: value }">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      // checked.value = !checked.value
      context.emit('update:value', !props.value)
    }
    return {
      toggle,
    }
  },
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: 11px;
  position: relative;
}
button > span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: 11px;
  transition: left 0.25s;
}
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button:focus {
  outline: none;
}
</style>
