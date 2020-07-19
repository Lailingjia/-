// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios' // 在这里引入axios0
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.prototype.$axios = axios; // 在vue中使用axios，全局
Vue.config.productionTip = false
import VueResource from 'vue-resource'
Vue.use(VueResource)
import animated from 'animate.css'
Vue.use(animated)
Vue.use(ElementUI);

import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

import * as voicePromptFun from './network/voicePrompt'
Vue.prototype.voicePrompt = voicePromptFun.voicePrompt //语音提醒
router.afterEach((to, from, next) => { //页面跳转从顶部显示
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
