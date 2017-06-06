import * as types from './mutation-types'

const _mutations = {
    [types.APP_CHANGE_THEME] (state, data) {
        state.app.theme = data.theme
    },
    [types.APP_NAV_DRAWER_STATE] (state, data) {
        state.app.navDrawerState = data
    },
    [types.APP_SET_FULLSCREEN] (state, data) {
        state.app.fullscreenEnabled = data.isEnabled
    },

    [types.API_REQUEST_START] (state, data) {
        state.apiStatus = {
            loading: true,
            type:    'REQUEST',
            ...data
        }
    },
    [types.API_REQUEST_END] (state, data) {
        state.apiStatus = {
            loading: false,
            type:    'RESPONSE',
            ...data
        }
    },
    [types.API_REQUEST_ERROR] (state, errData) {
        state.apiError = errData
    },
    [types.USER_LOGIN] (state, data) {
        state.isAuthenticated = true
        state.user            = data.user
        state.accessToken     = data.accessToken
        localStorage.setItem('accessToken', data.accessToken)
    },
    [types.USER_LOGOUT] (state, error) {
        state.isAuthenticated = false
        state.user            = {}
        state.accessToken     = null
        localStorage.removeItem('accessToken')
    },
    [types.UPDATE_USER] (state, data) {
        const userCopy = JSON.parse(JSON.stringify(state.user));
        const profileCopy = JSON.parse(JSON.stringify(data));
        userCopy.profile = Object.assign(userCopy.profile, profileCopy)
        state.user = userCopy
    },
    [types.USER_ADD_ALERT] (state, data) {
        state.user.alerts[data.alertId] = data
    },
    [types.USER_REMOVE_ALERT] (state, data) {
        // This runs into an observer issue with Vue, need to lookup fix
        // delete state.user.alerts[data.alertId]
        let alerts = Object.assign({}, state.user.alerts)
        delete alerts[data.alertId]
        state.user.alerts = alerts

    }
}

export const mutations = _mutations
