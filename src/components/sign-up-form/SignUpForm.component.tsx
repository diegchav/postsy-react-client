import React, { useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import axios from 'axios'
import isEmail from 'validator/lib/isEmail'

import FormInput from '../form-input/FormInput.component'

import { API_URL, API_AUTH_PATH, HTTP_OK, HTTP_BAD_REQUEST } from '../../constants'

import SignUpFormContainer from './SignUpForm.styles'

const SignUpForm: React.FC<RouteComponentProps> = ({ history }) => {
    const authUrl = API_URL + API_AUTH_PATH

    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        errors: {
            'username': '',
            'email': '',
            'password': ''
        },
        isSigningUp: false
    })

    const {
        username,
        email,
        password,
        errors,
        isSigningUp
    } = state

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const validate = () => {
        const validationErrors = {
            'username': '',
            'email': '',
            'password': ''
        }
        if (!username) validationErrors['username'] = 'Username is required'
        else if (username.length < 3) validationErrors['username'] = 'Username must be at least 3 characters'
        else if (username.length > 16) validationErrors['username'] = 'Username must be less than 16 characters'

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
            signUp(username, email, password)
        }
    }

    const signUp = async (username: String, email: String, password: String) => {
        const payload = {
            username,
            email,
            password
        }
        try {
            const res = await axios.post(authUrl + '/signup', payload)
            const resData = res.data
            if (resData.status === HTTP_OK) {
                history.push('/signin')
            }
        } catch (err) {
            const errData = err.response.data
            if (errData.status === HTTP_BAD_REQUEST) {
                if (errData.errors) {
                    const validationErrors = {
                        'username': '',
                        'email': '',
                        'password': ''
                    }
                    const errorsArray = errData.errors.map((e: Object) => Object.entries(e)[0]) || []
                    errorsArray.forEach((e: Array<string>) => {
                        const [key, value] = e
                        validationErrors[key as keyof typeof validationErrors] = value
                    })
                    setState({
                        ...state,
                        errors: validationErrors,
                        isSigningUp: false
                    })
                }
            } else {
                console.error(errData)
            }
        }
    }

    return (
        <SignUpFormContainer>
            <h1 className="title">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoFocus
                    value={username}
                    error={errors.username}
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
        </SignUpFormContainer>
    )
}

export default withRouter(SignUpForm)