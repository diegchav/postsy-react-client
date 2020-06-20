import { User, ValidationErrors } from './auth.reducer'

export const SIGN_IN_START = 'SIGN_IN_START'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export const SIGN_UP_START = 'SIGN_UP_START'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'
export const SET_VALIDATION_ERRORS = 'SET_VALIDATION_ERRORS'

export interface SignInUser {
    email: string,
    password: string
}

export interface SignInStartAction {
    type: typeof SIGN_IN_START,
    payload: SignInUser
}

interface SignInSuccessAction {
    type: typeof SIGN_IN_SUCCESS,
    payload: User
}

interface SignInFailureAction {
    type: typeof SIGN_IN_FAILURE,
    payload: ValidationErrors
}

export interface SignUpUser {
    name: string,
    email: string,
    password: string
}

export interface SignUpStartAction {
    type: typeof SIGN_UP_START,
    payload: SignUpUser
}

interface SignUpSuccessAction {
    type: typeof SIGN_UP_SUCCESS
}

interface SignUpFailureAction {
    type: typeof SIGN_UP_FAILURE,
    payload: ValidationErrors
}

interface SetValidationErrorsAction {
    type: typeof SET_VALIDATION_ERRORS,
    payload: ValidationErrors
}

export type AuthActionTypes = (
    SignInStartAction |
    SignInSuccessAction |
    SignInFailureAction |
    SignUpStartAction |
    SignUpSuccessAction |
    SignUpFailureAction |
    SetValidationErrorsAction
)