<template>
  <button class="wei-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="wei-loadingIndicator"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, ref } from 'vue'

export default {
  props: {
    theme: { type: String, default: 'button' },
    size: { type: String, default: 'normal' },
    disabled: Boolean,
    loading: Boolean,
  },

  setup(props, context) {
    const { theme, size, disabled, loading } = props
    const classes = computed(() => {
      return {
        [`wei-theme-${theme}`]: theme,
        [`wei-theme-${size}`]: size,
      }
    })
    return { classes }
  },
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.wei-button {
  box-sizing: border-box;
  padding: 12px 20px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  font-size: 14px;
  font-weight: 500;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  // 基础按钮样式
  &.wei-theme-button {
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }
  &.wei-theme-primary {
    background: #409eff;
    border: 1px solid #409eff;
    color: #fff;
    &[disabled] {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
  }
  &.wei-theme-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &[disabled] {
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;
    }
  }
  &.wei-theme-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &[disabled] {
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;
    }
  }
  &.wei-theme-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &[disabled] {
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;
    }
  }
  &.wei-theme-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &[disabled] {
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
    }
  }
  &.wei-theme-text {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
    box-shadow: none;
    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
    }
  }
  &.wei-theme-medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.wei-theme-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &.wei-theme-mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  > .wei-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: #fff #fff #fff transparent;
    border-style: solid;
    border-width: 2px;
    animation: wei-spin 1s infinite linear;
  }
}
@keyframes wei-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
