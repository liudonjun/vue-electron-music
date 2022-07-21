<template>
  <div class="layout">
    <div class="left">
      <ul>
        <li
          @click="changeType(item, index)"
          v-for="(item, index) in leftOption"
          :key="item.icon"
          :class="checkedIndex === index ? 'active' : ''"
        >
          <i class="iconfont" :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { leftOption } from '../../utils/constant'
export default {
  data() {
    return {
      checkedIndex: 0,
      leftOption,
    }
  },
  methods: {
    changeType(data, index) {
      this.checkedIndex = index
    },
  },
}
</script>
<style lang="scss" scoped>
.layout {
  background: #f4f4f4;
  height: calc(100% - 120px);
  display: flex;
  .left {
    height: 100%;
    width: 220px;
    background: #fcfcfc;
    margin: 0 auto;
    // padding: 40px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    ul > li {
      width: 220px;
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
      box-sizing: border-box;
      cursor: pointer;
      transition: 0.3s all ease;

      &:hover {
        background: #f6edc3;
      }
    }
    .active {
      transition: 0.3s all ease;
      background: #ffd200;
    }
  }
  .right {
    flex: 1;
  }
}
</style>
