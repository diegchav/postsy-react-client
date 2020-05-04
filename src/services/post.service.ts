import axios from 'axios'

import handleResponse from '../helpers/handle-response'
import authHeader from '../helpers/auth-header'

import { API_URL, API_POSTS_PATH } from '../constants'

export default class PostService {
    private static postsUrl = API_URL + API_POSTS_PATH

    static getAll = () => {
        return axios.get(PostService.postsUrl, { headers: authHeader() })
            .then(handleResponse)
            .then(res => res.posts)
    }

    static create = (text: string, imageFile?: File) => {
        const data = new FormData()
        data.append('text', text)
        if (imageFile) data.append('imageFile', imageFile)
        return axios.post(PostService.postsUrl, data, { headers: authHeader() })
            .then(handleResponse)
    }

    static delete = (id: string) => {
        return axios.delete(`${PostService.postsUrl}/${id}`, { headers: authHeader() })
    }
}