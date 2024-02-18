<template>
  <div class="wei-tabs">
    <div class="wei-tabs-nav" ref="container">
      <div
        class="wei-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) {
              selectedItem = el
            }
          }
        "
        :key="index"
        :class="{ selected: t === selected }"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="wei-tabs-nav-indicator" ref="indicator"></div>
    </div>

    <div class="wei-tabs-content">
      <!-- v-if和for一起使用的问题 -->
      <component class="wei-tabs-content-item" :is="current" :key="current?.props?.title"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import { computed, ref, watchEffect, onMounted } from 'vue'

export default {
  props: {
    selected: { type: String, default: '' },
  },
  setup(props, context) {
    const indicator = ref<HTMLDivElement | null>(null)
    const container = ref<HTMLDivElement | null>(null)
    const selectedItem = ref<HTMLDivElement | null>(null)

    // onMounted(x)
    // onUpdated(x)
    onMounted(() => {
      watchEffect(() => {
        let width = 0
        if (selectedItem && selectedItem.value) {
          width = selectedItem.value.getBoundingClientRect().width
        }

        let left1 = 0
        let left2 = 0
        if (container && container.value) {
          left1 = container.value.getBoundingClientRect().left
        }
        if (selectedItem && selectedItem.value) {
          left2 = selectedItem.value.getBoundingClientRect().left
        }
        const left = left2 - left1
        if (indicator && indicator.value) {
          indicator.value.style.width = width + 'px'
          indicator.value.style.left = left + 'px'
        }
      })
    })

    const defaults = context.slots.default!()
    defaults.forEach((item, index) => {
      //  @ts-ignore
      if (item.type.name !== Tab.name) {
        throw new Error('Tabs组件的子组件必须为Tab')
      }
    })

    const titles = defaults.map((item) => {
      return item.props?.title
    })

    // 当前选中的内容
    const current = computed(() => {
      return defaults.find((item) => {
        if (item.props) {
          return item.props.title === props.selected
        }
        return false
      })
    })

    const select = (title) => {
      context.emit('update:selected', title)
    }

    return {
      defaults,
      titles,
      current,
      select,
      indicator,
      container,
      selectedItem,
    }
  },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.wei-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
