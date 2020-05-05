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

    static follow = (userId: string) => {
        return axios.post(`${UserService.usersUrl}/follow/${userId}`, null, { headers: authHeader() })
            .then(handleResponse)
    }
}

export default UserService