import {
    SET_VALIDATION_ERRORS,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    AuthActionTypes,
} from './auth.types'

import { ValidationErrors } from './auth.reducer'

export const setValidationErrors = (errors: ValidationErrors): AuthActionTypes => {
    return {
        type: SET_VALIDATION_ERRORS,
        payload: errors
    }
}

export const signUpStart = (name: string, email: string, password: string): AuthActionTypes => {
    return {
        type: SIGN_UP_START,
        payload: { name, email, password }
    }
}

export const signUpSuccess = (): AuthActionTypes => {
    return {
        type: SIGN_UP_SUCCESS
    }
}

export const signUpFailure = (errors: ValidationErrors): AuthActionTypes => {
    return {
        type: SIGN_UP_FAILURE,
        payload: errors
    }
}