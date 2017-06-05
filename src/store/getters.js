export const apiRequestInProgress = state => state.apiStatus.loading || false
export const apiStatus            = state => state.apiStatus
export const apiError             = state => state.apiError

export const appState = state => state.app

export const userIsAuthenticated = state => state.isAuthenticated
export const userAccessToken     = state => state.accessToken
export const userProfile         = state => state.user.profile
export const userPreferences     = state => state.user.preferences

export const userAlerts       = state => state.user.alerts
export const userAlertsCount  = state => Object.entries(state.user.alerts).length
