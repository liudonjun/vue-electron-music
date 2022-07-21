<template>
  <div class="titlebtn" v-bind:style="style" v-on:click="click" v-html="html" />
</template>

<script>
const { ipcRenderer: ipc } = require('electron')
const style = {
  min: {
    // backgroundColor: "green",
    right: '100px',
    html: "<i class='iconfont icon-zuixiaohua'></i>",
  },
  max: {
    // backgroundColor: "yellow",
    right: '60px',
    html: "<i class='iconfont icon-3zuidahua-3'></i>",
  },
  close: {
    // backgroundColor: "black",
    right: '20px',
    html: "<i class='iconfont icon-guanbi'></i>",
  },
}
export default {
  props: ['type'],
  computed: {
    style: function () {
      return style[this.type]
    },
    html: function () {
      return style[this.type].html
    },
  },
  methods: {
    click: function () {
      ipc.send(this.type)
    },
  },
}
</script>

<style>
.titlebtn {
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  -webkit-app-region: no-drag;
  text-align: center;
  line-height: 20px;
}
</style>
