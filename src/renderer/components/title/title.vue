<template>
  <div id="mytitle">
    <div class="logo">music-logo</div>
    <div>
      <titleBtnVue type="min" />
      <titleBtnVue type="max" />
      <titleBtnVue type="close" />
    </div>
  </div>
</template>

<script>
import titleBtnVue from './titleBtn.vue'
export default {
  name: 'Mytitle',
  components: { titleBtnVue },
}
</script>

<style lang="scss">
#mytitle {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #fcfcfc;
  -webkit-app-region: drag;
  //   position: absolute;
  line-height: 50px;
  display: flex;
  align-items: center;
  .logo {
    margin-left: 20px;
    height: 30px;
  }
}
</style>
