/* eslint-disable standard/object-curly-even-spacing */
import Vue       from 'vue'
import Router    from 'vue-router'
import Login     from '@/components/Login'
import Dashboard from '@/components/views/Dashboard'
import Settings  from '@/components/views/Settings'

import { requireAuth, afterAuth } from './interceptors'

Vue.use(Router)

export default new Router({
    mode:           'history',
    base:           __dirname,
    scrollBehavior: () => ({ y: 0 }),
    routes:         [
        { path: '/login',     name: 'Login',     component: Login,     beforeEnter: afterAuth   },
        { path: '/dashboard', name: 'Dashboard', component: Dashboard, beforeEnter: requireAuth },
        { path: '/settings',  name: 'Settings',  component: Settings,  beforeEnter: requireAuth },
        { path: '*', redirect: '/dashboard' }
    ]
})
