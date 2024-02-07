<template>
  <div>Dialog示例</div>

  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <!-- :visible="x" @update:visible="x = $event"   相当于v-model -->
  <Dialog v-model:visible="x" :close-on-click-overlay="false" :onSubmit="f1" :onCancel="f2">
    <template v-slot:content>
      <div>哈哈是的</div>
      <div>大大大四大</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标配</strong>
    </template>
  </Dialog>

  <h1>示例2</h1>
  <Button @click="showDialog"> toggle</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog'
import { ref } from 'vue'
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false)
    // 点击显示隐藏
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {}
    const f2 = () => {
      return true
    }
    const showDialog = () => {
      openDialog({
        title: '简单标题',
        content: '内容',
      })
    }
    return { x, toggle, f1, f2, showDialog }
  },
}
</script>

<style lang="scss" scoped></style>
