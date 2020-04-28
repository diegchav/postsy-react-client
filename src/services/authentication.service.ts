import axios from 'axios'

import { API_URL, API_AUTH_PATH } from '../constants'
import handleResponse from '../helpers/handle-response'

export default class AuthenticationService {
    private static authUrl = API_URL + API_AUTH_PATH

    static signIn = (email: string, password: string) => {
        const payload = { email, password }
        return axios.post(AuthenticationService.authUrl + '/signin', payload)
            .then(handleResponse)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user))
            })
    }

    static getCurrentUser = () => {
        const user = localStorage.getItem('user')
        return user
    }
}