import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: require('@/views/recommend/recommend').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
