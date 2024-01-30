<template>
  <div>
    <Switch v-model:value="isChecked"></Switch>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'

export default {
  components: { Switch },

  setup() {
    const isChecked = ref(false)
    return {
      isChecked,
    }
  },
}
</script>

<style lang="scss" scoped></style>
