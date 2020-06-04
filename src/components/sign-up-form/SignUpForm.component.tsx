import React, { useState, useContext } from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'

import FormInput from '../form-input/FormInput.component'

import { FlashMessageType, FlashMessageContext } from '../../providers/FlashMessage.provider'

import AuthService from '../../services/auth.service'

import SignUpFormContainer from './SignUpForm.styles'

const SignUpForm: React.FC<RouteComponentProps> = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<{ [key: string]: string }>({
        name: '',
        email: '',
        password: ''
    })
    const [isSigningUp, setIsSigningUp] = useState(false)

    const { changeFlashMessage } = useContext(FlashMessageContext)

    const validate = () => {
        const validationErrors: typeof errors = {}

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
            setErrors(validationErrors)
        } else {
            setIsSigningUp(true)
            signUp(name.trim(), email.trim().toLowerCase(), password.trim())
        }
    }

    const signUp = async (name: string, email: string, password: string) => {
        try {
            await AuthService.signUp(name, email, password)
            changeFlashMessage('Successfully signed up', FlashMessageType.Success)
            history.push('/signin')
        } catch (err) {
            const { errors } = err
            if (errors) {
                setErrors(errors)
                setIsSigningUp(false)
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

export default withRouter(SignUpForm)