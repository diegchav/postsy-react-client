import { ValidationErrors } from './auth.reducer'

export const SET_VALIDATION_ERRORS = 'SET_VALIDATION_ERRORS'
export const SIGN_UP_START = 'SIGN_UP_START'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

interface SetValidationErrorsAction {
    type: typeof SET_VALIDATION_ERRORS,
    payload: ValidationErrors
}

interface SignUpStartAction {
    type: typeof SIGN_UP_START,
    payload: {
        name: string,
        email: string,
        password: string
    }
}

interface SignUpSuccessAction {
    type: typeof SIGN_UP_SUCCESS
}

interface SignUpFailureAction {
    type: typeof SIGN_UP_FAILURE,
    payload: ValidationErrors
}

export type AuthActionTypes = (
    SetValidationErrorsAction |
    SignUpStartAction |
    SignUpSuccessAction |
    SignUpFailureAction
)