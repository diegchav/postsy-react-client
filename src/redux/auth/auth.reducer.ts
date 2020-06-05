import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    AuthActionTypes,
    SET_VALIDATION_ERRORS,
    SIGN_UP_START
} from './auth.types'

export interface ValidationErrors {
    name?: string,
    email?: string,
    password?: string
}

export interface AuthState {
    signingUp: boolean,
    validationErrors: ValidationErrors,
}

const initialState: AuthState = {
    signingUp: false,
    validationErrors: {
        name: '',
        email: '',
        password: ''
    }
}

const authReducer = (state = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case SET_VALIDATION_ERRORS:
            return {
                ...state,
                validationErrors: { ...action.payload }
            }
        case SIGN_UP_START: {
            return {
                ...state,
                signingUp: true
            }
        }
        case SIGN_UP_SUCCESS:
            console.log('Success')
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
        default:
            return state
    }
}

export default authReducer