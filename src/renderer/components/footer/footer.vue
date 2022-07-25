<template>
  <div class="footer">
    <div class="container">
      <div class="leftPlay">
        <i class="iconfont icon-xiangzuo"></i>
        <i class="iconfont icon-zanting"></i>
        <i class="iconfont icon-xiangyou1"></i>
      </div>
      <div class="content">
        <img height="68px" width="68px" src="../../assets/image/defalut.jpg" alt="" />
        <div class="progress">
          <div class="title">
            <h3>最伟大的作品-周杰伦</h3>
            <span>01:01/3:43</span>
          </div>
          <ProgressBar />
        </div>
      </div>

      <!-- 
      <div class="right">
        <i class="iconfont icon-xiangzuo"></i>
        <i class="iconfont icon-zanting"></i>
        <i class="iconfont icon-xiangyou1"></i>
        <i class="iconfont icon-xihuan1"></i>
        <i class="iconfont icon-xiazai"></i>
        <i class="iconfont icon-shunxu"></i>
        <i class="iconfont icon-bofang"></i>
        <i class="iconfont icon-shipinbofang"></i>
        <i class="iconfont icon-suijibofang"></i>
        <i class="iconfont icon-danquxunhuan"></i>
        <i class="iconfont icon-xihuan"></i>
      </div>

      <audio
        controls
        src="http://le.sycdn.kuwo.cn/e000d425a9126cfde714a8045a15bd16/62d8bd05/resource/n1/6/28/142783087.mp3"
      ></audio> -->
    </div>
  </div>
</template>
<script>
import ProgressBar from '../../components/base/progress-bar'
export default {
  components: {
    ProgressBar,
  },
}
</script>
<style lang="scss" scoped>
.footer {
  height: 100%;
  color: #fff;
  background: #101121;
  box-sizing: border-box;
  // border-top: 1px solid #ccc;
  .container {
    height: 70px;
    display: flex;
    align-items: center; //
    // justify-content: space-around;
    .leftPlay {
      width: 220px;
      // background: red;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      i {
        font-size: 40px;
        color: #cfab07;
      }
    }
    .content {
      display: flex;
      flex: 1;
      .progress {
        flex: 1;
        padding: 7px 0;
        margin-left: 5px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-around;
        .title {
          width: 300px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .right {
      width: 300px;
    }
  }
}
</style>
