import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as getters   from './getters'
import * as actions   from './actions'

Vue.use(Vuex)

const initAccessToken = localStorage.getItem('accessToken')

let state = {
    app: {
        title: 'Admin UI',
        theme: 'dark'
    },
    isAuthenticated: initAccessToken || false,
    accessToken:     initAccessToken,
    user:            {
        name: ''
    },
    viewLoading: false,
    apiError:    {},
    apiStatus:   {
        loading: false,
        data:    {}
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    strict: process.env.NODE_ENV !== 'production'
})
