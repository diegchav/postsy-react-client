import { takeLatest, put, all, call } from 'redux-saga/effects'

import AuthService from '../../services/auth.service'

import {
    signUpSuccess,
    signUpFailure
} from './auth.actions'

import {
    SIGN_UP_START
} from './auth.types'

function* signUp({ payload: { name, email, password }}: any) {
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
        call(onSignUpStart)
    ])
}