<template>
  <div class="hearder">
    <div class="hearder-logo">
      <img src="../../assets/image/logo.png" height="100%" alt="" />
    </div>
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
  -webkit-app-region: drag;
  line-height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  &-logo {
    margin-left: 20px;
    height: 30px;
  }
}
</style>
