export const routeMetadata = {
    '/login': {
        title:        'Login',
        description:  'Login',
        requiresAuth: false
    },
    '/dashboard': {
        title:        'Dashboard',
        icon:         'dashboard',
        requiresAuth: true
    },
    '/settings': {
        title:        'Settings',
        description:  'Set your preferences below',
        icon:         'settings',
        requiresAuth: true
    },
    '/settings/profile': {
        title:        'Settings | Profile',
        icon:         'account_circle',
        requiresAuth: true
    },
    '/settings/preferences': {
        title:        'Settings | Preferences',
        icon:         'build',
        requiresAuth: true
    }
}

const METADATA_DEFAULTS = {
    title:        '',
    description:  '',
    icon:         '',
    requiresAuth: true
}

export const getRouteMetadata = function (path) {
    let meta = routeMetadata[path]
    if (!meta) {  console.warn(`No metadata found for path: ${path}`) }
    meta = meta || {}
    return Object.assign({}, METADATA_DEFAULTS, meta)
}
