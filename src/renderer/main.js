import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
import { Carousel, CarouselItem, Input, Icon } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import './styles/index.scss'

Vue.component(Carousel.name, Carousel)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)
Vue.component(CarouselItem.name, CarouselItem)
Vue.use(Carousel)
Vue.use(Input)
Vue.use(Icon)
Vue.use(CarouselItem)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app')
