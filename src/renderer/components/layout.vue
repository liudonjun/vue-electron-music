<template>
  <div class="layout">
    <div class="left">
      <ul>
        <li>推荐</li>
        <li>电台</li>
        <li>视频</li>
        <li>直播</li>
        <li>默认列表</li>
        <li>最近播放</li>
        <li>本地音乐</li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

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
    box-sizing: border-box;
    padding: 40px;
  }
  .right {
    flex: 1;
  }
}
</style>
