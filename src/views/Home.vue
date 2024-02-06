<template>
  <div class="wei-home">
    <div class="wei-navAndBanner">
      <TopNav></TopNav>
      <div class="wei-banner">
        <p class="wei-title">WEI-UI</p>
        <p class="wei-tip">不要停止奔跑，继续向前</p>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <ul></ul>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/topnav.vue'
export default {
  components: { TopNav },
}
</script>
<style lang="scss" scoped>
.wei-home {
  .wei-navAndBanner {
    background: linear-gradient(145deg, #b7e9e6 0, #7fd5dc 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
    .wei-banner {
      padding: 200px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > .wei-title {
        font-size: 28px;
        color: #075c64;
      }
      > .wei-tip {
        font-size: 24px;
        color: #075c64;
      }
      > .actions {
        margin-top: 30px;
        padding: 8px 0;
        a {
          width: 150px;
          margin: 0 8px;
          background: rgb(2, 188, 176);
          display: inline-block;
          $h: 40px;
          height: $h;
          line-height: $h;
          border-radius: 14px;
          padding: 0 8px;
          text-align: center;
          color: white;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
