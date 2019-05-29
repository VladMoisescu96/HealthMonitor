import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueCookies from "vue-cookies"
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })