// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue      from 'vue'
import Vuetify  from 'vuetify'
import VueI18n  from 'vue-i18n'
import { sync } from 'vuex-router-sync'

import * as localeMessages from './locales'

// TODO: Useful modules
// DragnDrop: https://github.com/SortableJS/Vue.Draggable
// Drag/Resize grid (for widgets): https://github.com/jbaysolutions/vue-grid-layout
// Charts:
//      - ChartJS:     https://github.com/apertureless/vue-chartjs
//      - Smoothie     import smoothie from 'smoothie'
// App Progress: https://github.com/rstacruz/nprogress
// Maps: https://github.com/KoRiGaN/Vue2Leaflet
// WebWorker: https://github.com/israelss/vue-worker

import App from './App'

import router from './router'
import store  from './store'
sync(store, router)

Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.config.performance = true

console.log(localeMessages)
const i18n = new VueI18n({
    locale:         'en_US',
    fallbackLocale: 'en_US',
    messages:       localeMessages
})

/* eslint-disable no-new */
new Vue({
    el:         '#app',
    router:     router,
    template:   '<App/>',
    i18n:       i18n,
    store:      store,
    components: { App }
})
