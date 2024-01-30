<template>
  <div>
    <!-- 将父元素的属性绑定到 Button组件上 -->
    <button v-bind="$attrs">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  inheritAttrs: false, // 不继承父元素属性
  setup(props, context) {
    // 这里是将父元素的属性分为两部分一个是给div用的size,和给button用的剩下的数下属性集合
    const { size, ...rest } = context.attrs

    return { size, rest }
  },
}
</script>

<style lang="scss" scoped></style>
<!-- 如果是默认情况，父元素所有属性会绑定到当前组件最外层的元素上，使用v-bind="$attrs"可以将父元素所有属性绑定到某个元素。分开需要使用context.attrs -->
