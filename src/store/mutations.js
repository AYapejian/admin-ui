import * as types from './mutation-types'

const _mutations = {
    [types.APP_CHANGE_THEME] (state, data) {
        state.app.theme = data.theme
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
    }
}

export const mutations = _mutations
