<template>
  <div class="wei-topNav">
    <router-link class="wei-logoWrap" to="/">
      <img class="wei-logo" src="../assets/wei-Logo.svg" alt="" />
    </router-link>
    <div class="wei-menu">
      <router-link to="/doc">文档</router-link>
    </div>
    <span v-if="toggleMenuButtonVisible" class="wei-toggleAside" @click="toggleMenu">
      <img class="wei-logo-menu" src="../assets/menu.svg" alt="" />
    </span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')!
    console.log('wei-topNav获取的menuVisible为:' + menuVisible?.value)
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {
      toggleMenu,
    }
  },
}
</script>

<style lang="scss" scoped>
.wei-topNav {
  background: linear-gradient(145deg, #b7e9e6 0, #7fd5dc 100%);
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgba(51, 51, 51, 0.1);
  > .wei-logoWrap {
    max-width: 6em;
    margin-right: auto;

    > .wei-logo {
      width: 40px;
      height: 40px;
    }
  }
  > .wei-menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: #075c64;
    > li {
      margin: 0 1em;
    }
  }
  > .wei-toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    .wei-logo-menu {
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 500px) {
    > .wei-menu {
      display: none;
    }
    > .wei-logoWrap {
      margin: 0 auto;
    }
    > .wei-toggleAside {
      display: inline-block;
    }
  }
}
</style>
