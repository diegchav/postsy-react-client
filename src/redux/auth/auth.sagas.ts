import { takeLatest, put, all, call } from 'redux-saga/effects'

import AuthService from '../../services/auth.service'

import history from '../../history'

import {
    signInSuccess,
    signInFailure,
    signUpSuccess,
    signUpFailure
} from './auth.actions'

import {
    SignInStartAction,
    SIGN_IN_START,
    SignUpStartAction,
    SIGN_UP_START
} from './auth.types'

function* signIn({ payload: { email, password }}: SignInStartAction) {
    try {
        const response = yield call(AuthService.signIn, email, password)
        const { user } = response
        yield put(signInSuccess(user))
        yield call(history.push, '/')
    } catch (err) {
        const { errors } = err
        yield put(signInFailure(errors))
    }
}

function* onSignInStart() {
    yield takeLatest(SIGN_IN_START, signIn)
}

function* signUp({ payload: { name, email, password }}: SignUpStartAction) {
    try {
        yield call(AuthService.signUp, name, email, password)
        yield put(signUpSuccess())
    } catch (err) {
        const { errors } = err
        yield put(signUpFailure(errors))
    }
}

function* onSignUpStart() {
    yield takeLatest(SIGN_UP_START, signUp)
}

export default function* authSagas() {
    yield all([
        call(onSignInStart),
        call(onSignUpStart)
    ])
}