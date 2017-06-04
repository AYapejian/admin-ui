// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue      from 'vue'
import Vuetify  from 'vuetify'
import VueI18n  from 'vue-i18n'
import { sync } from 'vuex-router-sync'
import * as localeMessages from './locales'

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
