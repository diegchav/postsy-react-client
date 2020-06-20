import axios from 'axios'

import { API_URL, API_AUTH_PATH } from '../constants'
import handleResponse from '../helpers/handle-response'

export default class AuthService {
    private static authUrl = API_URL + API_AUTH_PATH

    static signUp = (name: string, email: string, password: string) => {
        const payload = { name, email, password }
        return axios.post(AuthService.authUrl + '/signup', payload)
            .then(handleResponse)
    }

    static signIn = (email: string, password: string) => {
        const payload = { email, password }
        return axios.post(AuthService.authUrl + '/signin', payload)
            .then(handleResponse)
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res))
                return res
            })
    }

    static logOut = () => {
        localStorage.removeItem('user')
        window.location.reload()
    }

    static getCurrentUser = () => {
        const user = JSON.parse(localStorage.getItem('user')!)
        return user
    }
}