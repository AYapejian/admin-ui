import Vue from 'vue'
import Vuex from 'vuex'
import * as api  from '../services/api'
Vue.use(Vuex)

const initAccessToken = localStorage.getItem('accessToken')

let state = {
    isAuthenticated: initAccessToken || false,
    accessToken:     initAccessToken,
    user:            {
        name: ''
    },
    viewLoading: false,
    apiError:    null
}

let mutations = {
    setIsAuthenticated  (state, val) { (state.isAuthenticated = val) },
    setUser             (state, val) { (state.user = val)            },
    setViewLoading      (state, val) { (state.isViewLoading = val)   },
    setApiError         (state, val) { (state.apiError = val)        },
    setAccessToken      (state, val) {
        if (val) {
            localStorage.setItem('accessToken', val)
            state.accessToken = val
            state.isAuthenticated = true
        } else {
            localStorage.removeItem('accessToken')
            state.isAuthenticated = false
        }
    }
}

let actions = {
    async apiLogin ({ commit }, { email, password }) {
        let data
        try {
            data = await api.login({ email, password })
            commit('setUser', data.user)
            commit('setAccessToken', data.accessToken)
        } catch (e) {
            data = e
            commit('setApiError', e)
        }
        return data
    },
    apiLogout: ({ commit }) => {
        return api.logout()
            .then(data => {
                commit('setAccessToken', false)
            })
            .catch(error => commit('setApiError', error))
    }
}

let getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    strict: process.env.NODE_ENV !== 'production'
})
