/* eslint-disable standard/object-curly-even-spacing */
import Vue    from 'vue'
import Router from 'vue-router'
import Home   from '@/components/Home'
import Login  from '@/components/Login'

import { requireAuth, afterAuth } from './interceptors'

Vue.use(Router)

export default new Router({
    mode:               'history',
    base:               __dirname,
    saveScrollPosition: true,
    routes:             [
        { path: '/',      name: 'Hello', component: Home, beforeEnter: requireAuth },
        { path: '/login', name: 'Login', component: Login, beforeEnter: afterAuth   }
        // { path: '/login', name: 'Login', component: Login },
        // { path: '/',      name: 'Hello', component: Home  }
    ]
})
