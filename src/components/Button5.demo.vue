<demo>
  加载中
</demo>

<template>
  <Button theme="primary" loading>加载中</Button>
  <Button theme="primary" :loading="false">加载完毕</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  components: {
    Button,
  },
}
</script>
