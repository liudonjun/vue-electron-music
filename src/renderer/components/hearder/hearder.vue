<template>
  <div class="hearder">
    <div class="hearder-logo">
      <img src="../../assets/image/logo.png" height="100%" alt="" />
    </div>
    <div class="hearder-content">
      <div class="search">
        <input type="text" maxlength="128" placeholder="搜索音乐/MV/歌单/歌手" v-model="serachValue" />
        <i @click="onSearch" class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="drag"></div>
    <div class="hearder-btn">
      <VBtn @click="setFrame('min')" type="min" />
      <VBtn @click="setFrame('plus')" :type="isMax ? 'max' : 'plus'" />
      <VBtn @click="setFrame('close')" type="close" />
    </div>
  </div>
</template>

<script>
import VBtn from '../base/vbtn.vue'
export default {
  name: 'Mytitle',
  data() {
    this.currentWindow = this.$electron.remote.getCurrentWindow()
    return {
      serachValue: '',
      isMax: this.currentWindow.isMaximized(),
    }
  },
  mounted() {},
  components: { VBtn },
  methods: {
    setFrame(action) {
      switch (action) {
        case 'min':
          console.log(this.currentWindow)
          console.log(this.$electron)
          this.$electron.ipcRenderer.send('window-min')
          break
        case 'plus':
          console.log(this.$electron)
          this.$electron.ipcRenderer.send('window-max')
          break
        case 'close':
          console.log(this.$electron)
          this.$electron.ipcRenderer.send('window-close')
          break
      }
      this.isMax = this.currentWindow.isMaximized()
    },
  },
}
</script>

<style lang="scss">
.hearder {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #fcfcfc;
  line-height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  // border-bottom: 1px solid #ccc;
  &-logo {
    width: 200px;
    background: #f4f4f4;
    -webkit-app-region: drag;
    padding-left: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      line-height: 30px;
      height: 30px;
    }
  }
  &-content {
    padding: 0 10px;
    // background: red;
    .search {
      display: flex;
      flex-wrap: nowrap;
      height: 30px;
      width: 230px;
      align-items: center;
      background: #e8e8e8;
      border-radius: 10px;
      input {
        // height: 35px;
        border: none;
        padding: 0 3px;
        outline: none;
        background: #e8e8e8;
      }
      i{
        cursor: pointer;
      }
    }
  }
  .drag{
    -webkit-app-region: drag;
    flex: 1;
    height: 100%;
    // background: red;
  }
}
</style>
