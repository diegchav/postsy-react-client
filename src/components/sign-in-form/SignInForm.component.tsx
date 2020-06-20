import React, { useState } from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import FormInput from '../form-input/FormInput.component'

import { signInStart, setValidationErrors } from '../../redux/auth/auth.actions'
import { selectSigningIn, selectValidationErrors } from '../../redux/auth/auth.selectors'
import { ValidationErrors } from '../../redux/auth/auth.reducer'
import { AppState } from '../../redux/root-reducer'

import { validateSignIn } from '../../validators'

import SignInFormContainer from './SignInForm.styles'

interface SignInFormProps {
    isSigningIn: boolean,
    signInStart: Function,
    errors: ValidationErrors,
    setValidationErrors: Function
}

const SignInForm: React.FC<RouteComponentProps & SignInFormProps> = (
    { isSigningIn, signInStart, errors, setValidationErrors, history }
) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationErrors = validateSignIn(email, password)
        const areErrors = Object.values(validationErrors).some(elem => elem !== '')
        if (areErrors) {
            setValidationErrors(validationErrors)
        } else {
            signInStart(email.trim().toLowerCase(), password.trim())
        }
    }

    return (
        <SignInFormContainer>
            <h1 className="title">Sign In</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="email"
                    placeholder="Email"
                    autoFocus
                    value={email}
                    error={errors.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    error={errors.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <button type="submit" disabled={isSigningIn}>Sign In</button>
            </form>
            <p className="link">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </SignInFormContainer>
    )
}

const mapStateToProps = (state: AppState) => ({
    isSigningIn: selectSigningIn(state),
    errors: selectValidationErrors(state)
})

const mapDispatchProps = (dispatch: Dispatch) => ({
    signInStart: (email: string, password: string) => dispatch(signInStart({ email, password })),
    setValidationErrors: (errors: ValidationErrors) => dispatch(setValidationErrors(errors))
})

export default connect(mapStateToProps, mapDispatchProps)(withRouter(SignInForm))