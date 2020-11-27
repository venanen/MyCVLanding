import Vue from 'vue'
import App from './App.vue'
import store from './store'
import core from './core/core'
import * as data from './data/index'
import VueSplide from '@splidejs/vue-splide';

Vue.use( VueSplide );
Vue.config.productionTip = false
Vue.prototype.$scroll = {};
Vue.prototype.$core = core;
Vue.prototype.$usesData = data
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
