import { createSelector } from 'reselect'

import { AuthState } from './auth.reducer'

import { AppState } from '../root-reducer'

const selectAuth = (state: AppState) => state.auth

export const selectSigningUp = createSelector(
    [selectAuth],
    (auth: AuthState) => auth.signingUp
)

export const selectValidationErrors = createSelector(
    [selectAuth],
    (auth: AuthState) => auth.validationErrors
)