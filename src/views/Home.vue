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
    <div class="features">
      <ul>
        <li>
          <img class="wei-logo-vue" src="../assets/vue.svg" alt="" />
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <img class="wei-logo-ts" src="../assets/ts.svg" alt="" />
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <img class="wei-logo-light" src="../assets/light.svg" alt="" />
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
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
  .features {
    margin: 64px auto;
    width: 400px;

    @media (min-width: 800px) {
      width: 800px;
    }

    @media (min-width: 1200px) {
      width: 1200px;
    }

    > ul {
      display: flex;
      flex-wrap: wrap;

      > li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
          'icon title'
          'icon text';
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;

        > img {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }

        > h3 {
          grid-area: title;
          font-size: 28px;
        }

        > p {
          grid-area: text;
        }
      }
    }
  }
}
</style>
