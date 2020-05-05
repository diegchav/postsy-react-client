import { AxiosResponse } from 'axios'

import AuthService from '../services/auth.service'

import {
    HTTP_BAD_REQUEST,
    HTTP_OK,
    HTTP_UNAUTHORIZED,
    AUTHENTICATION_ERROR,
    VALIDATION_ERROR
} from '../constants'

export default (response: AxiosResponse) => {
    const resData = response.data
    if (resData.status === HTTP_OK) {
        return resData
    } else if (resData.status === HTTP_BAD_REQUEST) {
        const { message } = resData
        if (message === AUTHENTICATION_ERROR) {
            const errorMessage = resData.errors[0].error
            return Promise.reject({ error: errorMessage })
        } else if (message === VALIDATION_ERROR) {
            const errorsArray = resData.errors.map((e: Object) => Object.entries(e)[0]) || []
            const errorsObj = errorsArray.reduce((accum: any, e: Array<string>) => {
                const [key, value] = e
                accum[key] = value
                return accum
            }, {})
            return Promise.reject({ errors: errorsObj })
        }
    } else if (resData.status === HTTP_UNAUTHORIZED) {
        // Log out and redirect to signin in case jwt token is no longer valid
        AuthService.logOut()
        window.location.reload()
    }
}