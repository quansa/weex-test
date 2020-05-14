import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import BottomBar from '@/pages/BottomBar/index'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'BottomBar',
      component: BottomBar
    }
  ]
})
