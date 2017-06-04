import 'event-source-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Components from 'components/_index'

import { createStore } from 'store/index'
import { createRouter } from 'router/index'
import { sync } from 'vuex-router-sync'

Vue.use(Vuetify)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

const store = createStore()
const router = createRouter()

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
