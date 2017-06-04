import Vue    from 'vue'
import Router from 'vue-router'
import { getRouteMetadata } from './route-metadata'
import { requireAuth, afterAuth } from './interceptors'

Vue.use(Router)

function route (path, componentPath, beforeEnter) {
    const metadata = getRouteMetadata(path)
    const route = {
        path:      path,
        meta:      metadata,
        component: () => import(`../components/${componentPath}.vue`)
    }
    // Setup the interceptor to validate user is authorized prior to rendering
    if (metadata.requiresAuth) { route.beforeEnter = requireAuth }
    // Allow for manually setting the interceptor, mostly for login redirect to
    // wherever was trying to be viewed when not logged in
    if (beforeEnter) { route.beforeEnter = beforeEnter }
    return route
}

export default new Router({
    mode:           'history',
    base:           __dirname,
    scrollBehavior: () => ({ y: 0 }),
    routes:         [
        route('/login',     'Login', afterAuth),
        route('/dashboard', 'views/Dashboard'),
        route('/settings',  'views/Settings'),
        { path: '/', redirect: '/dashboard' }
    ]
})
