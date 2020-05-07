import axios from 'axios'

import authHeader from '../helpers/auth-header'
import handleResponse from '../helpers/handle-response'

import { API_URL, API_USERS_PATH } from '../constants'

class UserService {
    private static usersUrl = API_URL + API_USERS_PATH

    static getAll = () => {
        return axios.get(UserService.usersUrl, { headers: authHeader() })
            .then(handleResponse)
            .then(res => res.users)
    }

    static getUser = (id: string) => {
        return axios.get(`${UserService.usersUrl}/${id}`, { headers: authHeader() })
            .then(handleResponse)
            .then(res => res.user)
    }

    static updateUser = (id: string, name: string) => {
        const payload = { name }
        return axios.put(`${UserService.usersUrl}`, payload, { headers: authHeader() })
            .then(handleResponse)
    }

    static follow = (userId: string) => {
        return axios.post(`${UserService.usersUrl}/follow/${userId}`, null, { headers: authHeader() })
            .then(handleResponse)
    }

    static unfollow = (userId: string) => {
        return axios.post(`${UserService.usersUrl}/unfollow/${userId}`, null, { headers: authHeader() })
            .then(handleResponse)
    }
}

export default UserService