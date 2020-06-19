import React, { useState, useContext } from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'

import FormInput from '../form-input/FormInput.component'

import { ValidationErrors } from '../../redux/auth/auth.reducer'

import AuthService from '../../services/auth.service'

import { FlashMessageType, FlashMessageContext } from '../../providers/FlashMessage.provider'

import { validateSignIn } from '../../validators'

import SignInFormContainer from './SignInForm.styles'

const SignInForm = ({ history }: RouteComponentProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<ValidationErrors>({ email: '', password: '' })
    const [isSigningIn, setIsSigningIn] = useState(false)

    const { changeFlashMessage } = useContext(FlashMessageContext)

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationErrors = validateSignIn(email, password)
        const areErrors = Object.values(validationErrors).some(elem => elem !== '')
        if (areErrors) {
            setErrors(validationErrors)
        } else {
            setIsSigningIn(true)
            signIn(
                email.trim().toLowerCase(),
                password.trim())
        }
    }

    const signIn = async (email: string, password: string) => {
        try {
            await AuthService.signIn(email, password)
            history.push('/')
        } catch (err) {
            if (err.errors) {
                const { errors } = err
                setErrors(errors)
                setIsSigningIn(false)
            } else if (err.error) {
                changeFlashMessage(err.error, FlashMessageType.Error)
                setEmail('')
                setPassword('')
                setErrors({ email: '', password: '' })
                setIsSigningIn(false)
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

export default withRouter(SignInForm)