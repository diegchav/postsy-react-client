import { createSelector } from 'reselect'

import { AuthState } from './auth.reducer'

import { AppState } from '../root-reducer'

const selectAuth = (state: AppState) => state.auth

export const selectCurrentUser = createSelector(
    [selectAuth],
    (auth: AuthState) => auth.currentUser
)

export const selectSigningIn = createSelector(
    [selectAuth],
    (auth: AuthState) => auth.signingIn
)

export const selectSigningUp = createSelector(
    [selectAuth],
    (auth: AuthState) => auth.signingUp
)

export const selectValidationErrors = createSelector(
    [selectAuth],
    (auth: AuthState) => auth.validationErrors
)