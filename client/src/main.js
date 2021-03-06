import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueCookies from "vue-cookies"
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
 
Vue.use(new VueSocketIO({
  connection: SocketIO('/')})
);
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })