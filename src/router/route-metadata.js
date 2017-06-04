export const routeMetadata = {
    '/login': {
        title:        'Login',
        description:  'Login',
        requiresAuth: false
    },
    '/dashboard': {
        title:        'Dashboard',
        description:  'At a glance',
        requiresAuth: true
    },
    '/settings': {
        title:        'Settings',
        description:  'Set your preferences below',
        requiresAuth: true
    }
}

const METADATA_DEFAULTS = {
    requiresAuth: true
}

export const getRouteMetadata = function (path) {
    if (!routeMetadata[path]) { throw new Error(`Route metadata does not exist for path: ${path}`) }
    return Object.assign({}, METADATA_DEFAULTS, routeMetadata[path])
}
