<template>
  <div class="page">
    <div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in carouselList" :key="item">
          <img :src="item.pic" width="100%" height="100%" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { getHome } from '../api/api'
export default {
  name: 'landing-page',
  data() {
    return {
      carouselList: [],
    }
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link)
    },
  },
  async created() {
    const res = await getHome()
    console.log(res)
    this.carouselList = res.data
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.page {
  background: #F4F4F4;
  height: calc(100% - 120px);
}
.medium {
  background: chocolate;
  height: 100%;
}
</style>
