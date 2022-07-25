<template>
  <div class="recommend">
    <!-- 顶部菜单 -->
    <ul class="recommend-menu">
      <li
        v-for="(item, index) in topMenuList"
        @click="checkoutMenu(item, index)"
        :class="menuCheckedIndex === index ? 'active' : ''"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
    <!-- 轮播图区域 -->
    <div class="recommend-carousel">
      <el-carousel :interval="4000" type="card" height="180px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.pic" width="100%" height="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div>
      <p>个性推荐</p>
      <div>
        
      </div>
    </div> -->
  </div>
</template>
<script>
import { getBannerList } from '@/api/api'
import { topMenuList } from '../../utils/constant'
export default {
  data() {
    return {
      menuCheckedIndex: 0,
      topMenuList,
      bannerList: [
        {
          startTime: 1658470804000,
          id: 58,
          pic: 'https://kwimg3.kuwo.cn/star/upload/47/11/1658485984565_.jpg',
          endTime: 1669132800000,
          priority: 2,
          url: 'https://www.kuwo.cn/album_detail/30068693',
        },
        {
          startTime: 1656172800000,
          id: 69,
          pic: 'https://kwimg1.kuwo.cn/star/upload/83/47/1658589747491_.jpg',
          endTime: 1666540800000,
          priority: 3,
          url: 'https://www.kuwo.cn/playlist_detail/3371381148',
        },
        {
          startTime: 1653666904000,
          id: 67,
          pic: 'https://kwimg1.kuwo.cn/star/upload/79/13/1657383543367_.jpg',
          endTime: 1685202924000,
          priority: 4,
          url: 'https://www.kuwo.cn/playlist_detail/3336627481',
        },
        {
          startTime: 1653840000000,
          id: 62,
          pic: 'https://kwimg2.kuwo.cn/star/upload/66/97/1657470502281_.jpg',
          endTime: 1684930073000,
          priority: 5,
          url: 'https://www.kuwo.cn/playlist_detail/3344474759',
        },
      ],
    }
  },

  created() {
    // getBannerList({}).then((res) => {
    //   console.log(res)
    //   if (res.success) {
    //     this.bannerList = res.data
    //   }
    // })
  },
  methods: {
    checkoutMenu(item, index) {
      console.log(item)
      this.menuCheckedIndex = index
    },
  },
}
</script>
<style lang="scss" scoped>
.recommend {
  padding: 0 10px;
  &-menu {
    display: flex;
    padding: 10px 0;
    justify-content: space-around;
    li {
      color: #000;
      font-weight: 400;
      cursor: pointer;
      transition: 0.2s all ease;
      border-bottom: 3px solid transparent;
    }
    .active {
      transition: 0.2s all ease;
      font-weight: 600;
      border-bottom: 3px solid #ffe443;
      box-sizing: border-box;
    }
  }
}
</style>
