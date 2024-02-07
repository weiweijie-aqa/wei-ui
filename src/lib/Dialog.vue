<template>
  <template v-if="visible">
    <!-- 将所有元素放到body下,防止因为层级的原因导致被别的元素遮挡 -->
    <Teleport to="body">
      <div class="wei-dialog-overlay" @click="onClickOverlay"></div>

      <div class="wei-dialog-wrapper">
        <div class="wei-dialog">
          <header>
            <span v-if="title">{{ title }}</span>
            <slot v-else name="title"></slot>

            <span @click="close" class="wei-dialog-close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button theme="info" @click="onCancel">取消</Button>
            <Button theme="primary" @click="onSubmit">确认</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue'

export default {
  components: { Button },
  props: {
    title: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    // 是否可以点击遮罩关闭
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    onCancel: {
      type: Function,
    },
    onSubmit: {
      type: Function,
    },
  },
  setup(props, ctx) {
    const { closeOnClickOverlay } = props
    const close = () => {
      ctx.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (closeOnClickOverlay) {
        close()
      }
    }
    const onCancel = () => {
      if (props.onCancel && props.onCancel() !== false) {
        close()
      }
    }
    const onSubmit = () => {
      if (props.onSubmit && props.onSubmit() !== false) close()
    }
    return { close, onClickOverlay, onCancel, onSubmit }
  },
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.wei-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
