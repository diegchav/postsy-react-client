import {
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SET_VALIDATION_ERRORS,
    AuthActionTypes
} from './auth.types'

export interface User {
    _id: string,
    name: string
}

export interface ValidationErrors {
    name?: string,
    email?: string,
    password?: string
}

export interface AuthState {
    currentUser: User | null,
    signingIn: boolean,
    signingUp: boolean,
    validationErrors: ValidationErrors,
}

const initialState: AuthState = {
    currentUser: null,
    signingIn: false,
    signingUp: false,
    validationErrors: {
        name: '',
        email: '',
        password: ''
    }
}

const authReducer = (state = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case SIGN_IN_START: {
            return {
                ...state,
                signingIn: true
            }
        }
        case SIGN_IN_SUCCESS: {
            return {
                ...state,
                signingIn: false,
                currentUser: action.payload
            }
        }
        case SIGN_IN_FAILURE: {
            return {
                ...state,
                signingIn: false,
                validationErrors: { ...action.payload }
            }
        }
        case SIGN_UP_START: {
            return {
                ...state,
                signingUp: true
            }
        }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signingUp: false
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signingUp: false,
                validationErrors: { ...action.payload }
            }
        case SET_VALIDATION_ERRORS:
            return {
                ...state,
                validationErrors: { ...action.payload }
            }
        default:
            return state
    }
}

export default authReducer