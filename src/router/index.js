import Vue    from 'vue'
import Router from 'vue-router'
import { getRouteMetadata } from './route-metadata'
// import { requireAuth, afterAuth } from './interceptors'

Vue.use(Router)

function getLayoutComponent(compPath) { return () => import(`@/layouts/${compPath}.vue`)    }
function getViewComponent(compPath)   { return () => import(`@/components/${compPath}.vue`) }

const routeDefinitions = []

routeDefinitions.push({
    path:      '/login',
    component: getLayoutComponent('LoginLayout'),
    // beforeEnter: afterAuth,
    meta:      getRouteMetadata('/login')
})

routeDefinitions.push({
    path:      '/settings',
    component: getLayoutComponent('SettingsLayout'),
    meta:      getRouteMetadata('/settings'),
    // beforeEnter: requireAuth,
    children:  [
        { path: '', meta: getRouteMetadata('/settings'), component: getViewComponent('settings/SettingsView') },
        { path: '/settings/preferences/', meta: getRouteMetadata('/settings/preferences'), component: getViewComponent('settings/SettingsPreferencesView') }
    ]
})

routeDefinitions.push({
    path:      '/dashboard',
    component: getLayoutComponent('DashboardLayout'),
    meta:      getRouteMetadata('/dashboard'),
    // beforeEnter: requireAuth,
    children:  [
        { path: '', meta: getRouteMetadata('/dashboard'), component: getViewComponent('dashboard/DashboardView') }
    ]
})

routeDefinitions.push({ path: '/', redirect: '/dashboard' })

export default new Router({
    mode:           'history',
    base:           __dirname,
    scrollBehavior: () => ({ y: 0 }),
    routes:         routeDefinitions
})
