import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import axios from 'axios'
import {
    render,
    fireEvent,
    waitFor
} from '@testing-library/react'

import SignUpForm from './SignUpForm.component'

import { HTTP_BAD_REQUEST, VALIDATION_ERROR } from '../../constants'


jest.mock('axios')

const axiosMock = axios as jest.Mocked<typeof axios>

/**
 * Mock data
 */
const userValidUsername = 'test'
const userValidEmail = 'test@example.com'
const userValidPassword = 'password'
const userInvalidUsernameMinLength = 'te'
const userInvalidUsernameMaxLength = 'testtesttesttesttest'
const userInvalidEmail = 'test'
const userInvalidPasswordMinLength = 'test'

describe('<SignUpForm />', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders an error span element if username is not provided', () => {
        const { getByRole, getByText } = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )
        fireEvent.click(getByRole('button'))
        expect(getByText('Username is required')).toBeInTheDocument()
    })

    it('renders an error span element if username length is less than required', () => {
        const { getByPlaceholderText, getByRole, getByText } = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )
        fireEvent.change(getByPlaceholderText('Username'), { target: { value: userInvalidUsernameMinLength } })
        fireEvent.click(getByRole('button'))
        expect(getByText('Username must be at least 3 characters')).toBeInTheDocument()
    })

    it('renders an error span element if username length is greater than required', () => {
        const { getByPlaceholderText, getByRole, getByText } = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )
        fireEvent.change(getByPlaceholderText('Username'), { target: { value: userInvalidUsernameMaxLength } })
        fireEvent.click(getByRole('button'))
        expect(getByText('Username must be less than 16 characters')).toBeInTheDocument()
    })

    it('renders an error span element if username already exists', async () => {
        const { getByPlaceholderText, queryByText, getByRole } = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )

        // Mock axios post request
        axiosMock.post.mockResolvedValueOnce({
            data: {
                status: HTTP_BAD_REQUEST,
                message: VALIDATION_ERROR,
                errors: [{
                    username: 'Username is already taken'
                }]
            }
        })

        // Fill input fields
        fireEvent.change(getByPlaceholderText('Username'), { target: { value: userValidUsername } })
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: userValidEmail } })
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: userValidPassword } })

        // Span error should not be rendered at this point
        expect(queryByText('Username is already taken')).not.toBeInTheDocument()

        // Submit form
        fireEvent.click(getByRole('button'))

        expect(axiosMock.post).toHaveBeenCalled()
        await waitFor(() => {
            expect(queryByText('Username is already taken')).toBeInTheDocument()
        })
    })

    it('renders an error span element if email is not provided', () => {
        const { getByRole, getByText } = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )
        fireEvent.click(getByRole('button'))
        expect(getByText('Email is required')).toBeInTheDocument()
    })

    it('renders an error span element if email is invalid', () => {
        const { getByPlaceholderText, getByRole, getByText } = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: userInvalidEmail } })
        fireEvent.click(getByRole('button'))
        expect(getByText('Email is not valid')).toBeInTheDocument()
    })

    it('renders an error span element if email already exists', async () => {
        const { getByPlaceholderText, queryByText, getByRole } = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )

        // Mock axios post request
        axiosMock.post.mockResolvedValueOnce({
            data: {
                status: HTTP_BAD_REQUEST,
                message: VALIDATION_ERROR,
                errors: [{
                    email: 'Email is already taken'
                }]
            }
        })

        // Fill input fields
        fireEvent.change(getByPlaceholderText('Username'), { target: { value: userValidUsername } })
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: userValidEmail } })
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: userValidPassword } })

        // Span error should not be rendered at this point
        expect(queryByText('Email is already taken')).not.toBeInTheDocument()

        // Submit form
        fireEvent.click(getByRole('button'))

        expect(axiosMock.post).toHaveBeenCalled()
        await waitFor(() => {
            expect(queryByText('Email is already taken')).toBeInTheDocument()
        })
    })

    it('renders an error span element if password is not provided', () => {
        const { getByRole, getByText } = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )
        fireEvent.click(getByRole('button'))
        expect(getByText('Password is required')).toBeInTheDocument()
    })

    it('renders an error span element if password length is less than required', () => {
        const { getByPlaceholderText, getByRole, getByText } = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: userInvalidPasswordMinLength } })
        fireEvent.click(getByRole('button'))
        expect(getByText('Password must be at least 8 characters')).toBeInTheDocument()
    })

    it('disables the submit button while performing sign up', async () => {
        const { getByRole, getByPlaceholderText } = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )

        // Mock axios response
        axiosMock.post.mockResolvedValueOnce({
            data: {
                status: HTTP_BAD_REQUEST,
                message: VALIDATION_ERROR,
                errors: [{
                    username: 'Username is required'
                }]
            }
        })

        const submitButton = getByRole('button')
        expect(submitButton).not.toHaveAttribute('disabled')

        // Submit form
        fireEvent.change(getByPlaceholderText('Username'), { target: { value: userValidUsername } })
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: userValidEmail } })
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: userValidPassword } })

        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(submitButton).toHaveAttribute('disabled')
        })

        expect(submitButton).not.toHaveAttribute('disabled')
    })
})