import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: require('@/views/recommend/recommend').default,
    },
    {
      path: '/video',
      name: 'video',
      component: require('@/views/video/video').default,
    },
    {
      path: '/live',
      name: 'live',
      component: require('@/views/live/live').default,
    },
    {
      path: '/download',
      name: 'download',
      component: require('@/views/download/download').default,
    },
    {
      path: '/like',
      name: 'like',
      component: require('@/views/like/like').default,
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: require('@/views/cloud/cloud').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})
