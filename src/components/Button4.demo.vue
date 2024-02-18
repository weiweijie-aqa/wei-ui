<demo>
  不同尺寸
</demo>

<template>
  <Button>默认大小</Button>
  <Button size="medium">中等大小</Button>
  <Button size="small">小型按钮</Button>
  <Button size="mini">超小按钮</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  components: {
    Button,
  },
}
</script>
