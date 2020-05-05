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
}

export default UserService