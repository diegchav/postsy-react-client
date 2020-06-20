import {
    SignInUser,
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SignUpUser,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SET_VALIDATION_ERRORS,
    AuthActionTypes,
} from './auth.types'

import { User, ValidationErrors } from './auth.reducer'

export const signInStart = (user: SignInUser): AuthActionTypes => {
    return {
        type: SIGN_IN_START,
        payload: user
    }
}

export const signInSuccess = (user: User): AuthActionTypes => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: user
    }
}

export const signInFailure = (errors: ValidationErrors): AuthActionTypes => {
    return {
        type: SIGN_IN_FAILURE,
        payload: errors
    }
}

export const signUpStart = (user: SignUpUser): AuthActionTypes => {
    return {
        type: SIGN_UP_START,
        payload: user
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

export const setValidationErrors = (errors: ValidationErrors): AuthActionTypes => {
    return {
        type: SET_VALIDATION_ERRORS,
        payload: errors
    }
}