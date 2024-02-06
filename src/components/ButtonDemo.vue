<template>
  <div>Button 示例</div>
  <h1>基础按钮</h1>
  <div>
    <Button>默认按钮</Button>
    <Button theme="primary">主要按等等钮</Button>
    <Button theme="success">成功按钮</Button>
    <Button theme="info">信息按钮</Button>
    <Button theme="warning">警告按钮</Button>
    <Button theme="danger">危险按钮</Button>
  </div>
  <h1>禁用状态</h1>
  <div>
    <Button disabled>默认按钮</Button>
    <Button theme="primary" disabled>主要按钮</Button>
    <Button theme="success" disabled>成功按钮</Button>
    <Button theme="info" disabled>信息按钮</Button>
    <Button theme="warning" disabled>警告按钮</Button>
    <Button theme="danger" disabled>危险按钮</Button>
  </div>

  <h1>文字按钮</h1>
  <div>
    <Button theme="text">文字按钮</Button>
    <Button theme="text" disabled>文字按钮</Button>
  </div>
  <h1>不同尺寸</h1>
  <div>
    <Button>默认大小</Button>
    <Button size="medium">中等大小</Button>
    <Button size="small">小型按钮</Button>
    <Button size="mini">超小按钮</Button>
  </div>
  <h1>加载中</h1>
  <div>
    <Button theme="primary" loading>加载中</Button>
    <Button theme="primary" :loading="false">加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log(11111)
    }
    return {
      onClick,
    }
  },
}
</script>

<style lang="scss" scoped></style>
