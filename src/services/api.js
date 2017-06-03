import axios from 'axios'
import store from '../store'
import * as types from '../store/mutation-types'
const apiClient = axios.create({ baseURL: 'http://localhost:3001/api' })

// These can be used for setting store state's via dispatch
// which can be watched as hooks for things like app loading indicators
const requestStart     = (config)   => {
    store.commit(types.API_REQUEST_START, {
        url:    config.url,
        method: config.method
    })
    return config
}
const responseFinished = (response) => {
    store.commit(types.API_REQUEST_END, {
        url:        response.config.url,
        status:     response.status,
        statusText: response.statusText,
        data:       response.data
    })
    return response
}
const responseError    = (errData)    => {
    const config   = errData.config
    const response = errData.response || {}

    store.commit(types.API_REQUEST_ERROR, {
        url:          config.url,
        status:       response.status,
        statusText:   response.statusText,
        errorMessage: errData.message,
        data:         response.data
    })
    return Promise.reject(errData)
}

apiClient.interceptors.request.use(requestStart)
apiClient.interceptors.response.use(responseFinished, responseError)

export const login = function login({ email, password }) {
    // NOTE: Change this to POST when not using mock api
    return apiClient.get('/login').then(res => res.data)
}

export const logout = function logout() {
    // NOTE: Change this to DELETE when not using mock api
    return apiClient.get('/login').then(res => res.data)
}

export const me = () => apiClient.get('/me')
