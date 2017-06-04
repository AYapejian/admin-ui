import store from '../store'

// If user is not authenticated redirect to login page and set
// param to redirect to original target page after authenticating
export const requireAuth = (to, from, next) => {
    const isAuthenticated = store.state.isAuthenticated
    // If not authenticated send to login page
    if (isAuthenticated) {
        next()
    } else {
        next({
            path:  '/login',
            query: { redirect: to.fullPath }
        })
    }
}

// After authenticating check if a redirect to orginal page was set
// and if not goes to root /
export const afterAuth = (to, from, next) => {
    const isAuthenticated = store.state.isAuthenticated
    // If Authenticated allow to proceed else send back to 'from' path
    if (!isAuthenticated) {
        next()
    } else {
        next(from.path)
    }
}
