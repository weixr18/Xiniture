// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Game from '@/components/Game';
import './assets/fonts/font.css'

import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource';
Vue.use(VueResource)

import { Button, Select, Option, Progress } from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Progress)

let echarts = require('echarts/lib/echarts')
// 引入折线图等组件
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/radar')
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/legendScroll')//图例翻译滚动
Vue.prototype.$echarts = echarts

Vue.prototype.$game = Game;
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //template: '<App/>',
  render(h) {
    return h('App');
  },
  components: { App },

})


