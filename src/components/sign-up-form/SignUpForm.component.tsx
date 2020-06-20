import React, { useState } from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import FormInput from '../form-input/FormInput.component'

import { signUpStart, setValidationErrors } from '../../redux/auth/auth.actions'
import { selectSigningUp, selectValidationErrors } from '../../redux/auth/auth.selectors'
import { ValidationErrors } from '../../redux/auth/auth.reducer'
import { AppState } from '../../redux/root-reducer'

import { validateSignUp } from '../../validators'

import SignUpFormContainer from './SignUpForm.styles'

interface SignUpFormProps {
    isSigningUp: boolean,
    signUpStart: Function,
    errors: ValidationErrors,
    setValidationErrors: Function
}

const SignUpForm: React.FC<RouteComponentProps & SignUpFormProps> = (
    { isSigningUp, signUpStart, errors, setValidationErrors }
) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationErrors = validateSignUp(name, email, password)
        const hasErrors = Object.keys(validationErrors).length !== 0
        if (hasErrors) {
            setValidationErrors(validationErrors)
        } else {
            signUpStart(name.trim(), email.trim().toLowerCase(), password.trim())
        }
    }

    return (
        <SignUpFormContainer>
            <h1 className="title">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoFocus
                    value={name}
                    error={errors.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                <FormInput
                    type="text"
                    name="email"
                    placeholder="Email"
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
                <button type="submit" disabled={isSigningUp}>Sign Up</button>
            </form>
            <span className="link">Already have an account? <Link to="/signin">Sign in</Link></span>
        </SignUpFormContainer>
    )
}

const mapStateToProps = (state: AppState) => ({
    isSigningUp: selectSigningUp(state),
    errors: selectValidationErrors(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signUpStart: (name: string, email: string, password: string) => dispatch(signUpStart({ name, email, password })),
    setValidationErrors: (errors: ValidationErrors) => dispatch(setValidationErrors(errors)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpForm))