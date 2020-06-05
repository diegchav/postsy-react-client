import React, { useState } from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import isEmail from 'validator/lib/isEmail'

import FormInput from '../form-input/FormInput.component'

import { setValidationErrors, signUpStart } from '../../redux/auth/auth.actions'
import { selectSigningUp, selectValidationErrors } from '../../redux/auth/auth.selectors'
import { AppState } from '../../redux/root-reducer'

import SignUpFormContainer from './SignUpForm.styles'

interface ValidationErrors {
    name?: string,
    email?: string,
    password?: string
}

interface SignUpFormProps {
    isSigningUp: boolean,
    errors: ValidationErrors,
    setValidationErrors: Function,
    signUpStart: Function
}

const SignUpForm: React.FC<RouteComponentProps & SignUpFormProps> = (
    { isSigningUp, errors, setValidationErrors, signUpStart }
) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const validate = () => {
        const validationErrors: ValidationErrors = {}

        if (!name) validationErrors['name'] = 'Name is required'
        else if (name.length > 120) validationErrors['name'] = 'Name must be at most 120 characters'

        if (!email) validationErrors['email'] = 'Email is required'
        else if (!isEmail(email)) validationErrors['email'] = 'Email is not valid'

        if (!password) validationErrors['password'] = 'Password is required'
        else if (password.length < 8) validationErrors['password'] = 'Password must be at least 8 characters'

        return validationErrors
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationErrors = validate()
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
    setValidationErrors: (errors: ValidationErrors) => dispatch(setValidationErrors(errors)),
    signUpStart: (name: string, email: string, password: string) => dispatch(signUpStart(name, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpForm))