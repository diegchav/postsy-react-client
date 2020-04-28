import React, { useState, useContext } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'

import FormInput from '../form-input/FormInput.component'

import AuthenticationService from '../../services/authentication.service'

import { ErrorContext } from '../../providers/Error.provider'

import SignInFormContainer from './SignInForm.styles'

const SignInForm: React.FC<RouteComponentProps> = ({ history }) => {
    const [state, setState] = useState({
        email: '',
        password: '',
        errors: {
            email: '',
            password: ''
        },
        isSigningIn: false
    })

    const {
        email,
        password,
        errors,
        isSigningIn
    } = state

    const { changeError } = useContext(ErrorContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    
    }
    const validate = () => {
        const validationErrors = {
            email: '',
            password: ''
        }
        
        if (!email) validationErrors['email'] = 'Email is required'
        else if (!isEmail(email)) validationErrors['email'] = 'Email is not valid'

        if (!password) validationErrors['password'] = 'Password is required'

        return validationErrors
    }

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationErrors = validate()
        const areErrors = Object.values(validationErrors).some(elem => elem !== '')
        if (areErrors) {
            setState({
                ...state,
                errors: validationErrors
            })
        } else {
            setState({ ...state, isSigningIn: true })
            signIn(email, password)
        }
    }

    const signIn = async (email: string, password: string) => {
        try {
            await AuthenticationService.signIn(email, password)
            history.push('/')
        } catch (err) {
            if (err.errors) {
                const { errors } = err
                setState({
                    ...state,
                    errors,
                    isSigningIn: false
                })
            } else if (err.error) {
                changeError(err.error)
                setState({
                    ...state,
                    email: '',
                    password: '',
                    errors: {
                        email: '',
                        password: ''
                    },
                    isSigningIn: false
                })
            }
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
                onChange={handleChange} />
            <FormInput
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                error={errors.password}
                onChange={handleChange} />
            <button type="submit" disabled={isSigningIn}>Sign In</button>
        </form>
    </SignInFormContainer>
    )
}

export default withRouter(SignInForm)