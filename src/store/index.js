import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as getters   from './getters'
import * as actions   from './actions'

Vue.use(Vuex)

const initAccessToken = localStorage.getItem('accessToken')

let state = {
    isAuthenticated: !!initAccessToken,
    accessToken:     initAccessToken,
    app: {
        title:             'Admin UI',
        theme:             'dark',
        navDrawerState:    { visible: true, mini: true },
        fullscreenEnabled: false
    },
    user: {
        profile: {
            email: 'j.doe@doe.com',
            name: {
                first: 'John',
                last:  'Doe'
            },
            avatarUrl: 'https://randomuser.me/api/portraits/lego/3.jpg'
        },
        alerts: {
            alertId1: { title: 'New alert', description: 'This is a new alert', priority: 'high', timestamp: '2017-05-15T10:36:33.856Z' },
            alertId2: { title: 'Second alert occurrence', description: 'Second alert test ', priority: 'low', timestamp: '2017-05-05T11:22:33.856Z' },
            alertId3: { title: 'And one more...', description: 'Another one here', priority: 'med', timestamp: '2017-06-01T02:36:33.856Z' }
        },
        preferences: {}
    },
    apiError:  {},
    apiStatus: {
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
