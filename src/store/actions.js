import * as api   from '../services/api'
import * as types from './mutation-types'

export const apiLogin = async ({ commit }, { email, password }) => {
    const data = await api.login({ email, password })
    commit(types.USER_LOGIN, data)
}

export const apiLogout = async ({ commit }) => {
    const data = await api.logout()
    commit(types.USER_LOGOUT, data)
}
