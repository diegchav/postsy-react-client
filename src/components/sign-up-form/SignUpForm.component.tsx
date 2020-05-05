import React, { useState, useContext } from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'

import FormInput from '../form-input/FormInput.component'

import AuthService from '../../services/auth.service'

import { FlashMessageType, FlashMessageContext } from '../../providers/FlashMessage.provider'

import SignUpFormContainer from './SignUpForm.styles'

const SignUpForm: React.FC<RouteComponentProps> = ({ history }) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        errors: {
            'name': '',
            'email': '',
            'password': ''
        },
        isSigningUp: false
    })

    const {
        name,
        email,
        password,
        errors,
        isSigningUp
    } = state

    const { changeFlashMessage } = useContext(FlashMessageContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const validate = () => {
        const validationErrors = {
            'name': '',
            'email': '',
            'password': ''
        }
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

        // Perform form validation
        const validationErrors = validate()
        const areErrors = Object.values(validationErrors).some(elem => elem !== '')
        if (areErrors) {
            setState({
                ...state,
                errors: validationErrors
            })
        } else {
            setState({ ...state, isSigningUp: true })
            signUp(name.trim(), email.trim(), password.trim())
        }
    }

    const signUp = async (name: string, email: string, password: string) => {
        try {
            await AuthService.signUp(name, email, password)
            changeFlashMessage('Successfully signed up', FlashMessageType.Success)
            history.push('/signin')
        } catch (err) {
            if (err.errors) {
                const { errors } = err
                setState({
                    ...state,
                    errors,
                    isSigningUp: false
                })
            }
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
                    onChange={handleChange} />
                <FormInput
                    type="text"
                    name="email"
                    placeholder="Email"
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
                <button type="submit" disabled={isSigningUp}>Sign Up</button>
            </form>
            <span className="link">Already have an account? <Link to="/signin">Sign in</Link></span>
        </SignUpFormContainer>
    )
}

export default withRouter(SignUpForm)