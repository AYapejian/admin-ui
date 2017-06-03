import axios from 'axios'

const clients = {
    mock: axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' }),
    api:  axios.create({ baseURL: 'api' })
}

const requestStart     = (config)   => config
const responseFinished = (response) => response
const responseError    = (error)    => error

clients.mock.interceptors.request.use(requestStart)
clients.mock.interceptors.response.use(responseFinished, responseError)

clients.api.interceptors.request.use(requestStart)
clients.api.interceptors.response.use(responseFinished, responseError)

const mock = {
    getData: (prop, delay) => {
        return new Promise((resolve) => {
            setTimeout(() => (resolve(mock[prop])), delay || 300)
        })
    },
    login: {
        status: 200,
        data:   {
            user: {
                email: 'j.doe@doe.com',
                name:  { first: 'John', last: 'Doe' }
            },
            accessToken: '12345'
        }
    },
    logout: { status: 200, data: {} }
}

export const login = function login({ email, password }) {
    return mock.getData('login').then(res => res.data)
    // return apiClient.post('/auth/login', { email, password })
    //     .then(result => {
    //         return result.data
    //     })
}

export const logout = function logout() {
    return mock.getData('logout').then(res => res.data)
    // return apiClient.delete('/login')
    //     .then(result => {
    //         return result.data
    //     })
}
