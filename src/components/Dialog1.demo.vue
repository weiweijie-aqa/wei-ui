<demo>
  基础用法
</demo>

<template>
  <Button @click="toggle">点击打开 Dialog</Button>
  <Dialog v-model:visible="visible" :close-on-click-overlay="false" :onSubmit="open" :onCancel="close">
    <template v-slot:content>
      <div>内容</div>
    </template>
    <template v-slot:title>
      <strong>标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'

export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const visible = ref(false)

    const toggle = () => {
      visible.value = !visible.value
    }
    const open = () => {}
    const close = () => {
      return true
    }
    return { visible, toggle, open, close }
  },
}
</script>
