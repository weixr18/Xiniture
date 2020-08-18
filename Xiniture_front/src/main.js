// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Game from '@/components/Game';
import ElementUi from 'element-ui'
import VueResource from 'vue-resource';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/font.css'

Vue.prototype.$game = Game;
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


