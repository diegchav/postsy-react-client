import axios from 'axios'

import authHeader from '../helpers/auth-header'
import handleResponse from '../helpers/handle-response'

import { API_URL, API_FEEDS_PATH } from '../constants'

export default class FeedService {
    private static feedsUrl = API_URL + API_FEEDS_PATH

    static getAll = () => {
        return axios.get(FeedService.feedsUrl, { headers: authHeader() })
            .then(handleResponse)
            .then(res => res.feeds)
    }
}