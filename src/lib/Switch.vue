<template>
  <button @click="toggle" class="wei-switch" :class="{ 'wei-checked': value }">
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

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.wei-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: 11px;
  position: relative;
}
.wei-switch > span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: 11px;
  transition: left 0.25s;
}
.wei-switch.wei-checked {
  background: blue;
}
.wei-switch.wei-checked > span {
  left: calc(100% - #{$h2} - 2px);
}
.wei-switch:focus {
  outline: none;
}
</style>
