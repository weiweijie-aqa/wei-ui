<demo>
  通过函数打开Dialog
</demo>

<template>
  <Button @click="showDialog">点击打开 Dialog</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog'

export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '内容',
      })
    }
    return { showDialog }
  },
}
</script>
