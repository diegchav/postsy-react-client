import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import {
    RenderResult,
    render,
    fireEvent,
    waitFor
} from '@testing-library/react'

import SignUpForm from './SignUpForm.component'

import { HTTP_BAD_REQUEST } from '../../constants'

import axios from 'axios'

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
    let renderResult: RenderResult

    beforeEach(() => {
        renderResult = render(
            <MemoryRouter>
                <SignUpForm />
            </MemoryRouter>
        )
    })

    it('renders an error span element if username is not provided', () => {
        const { getByRole, getByText } = renderResult
        fireEvent.click(getByRole('button'))
        expect(getByText('Username is required')).toBeInTheDocument()
    })

    it('renders an error span element if username length is less than required', () => {
        const { getByPlaceholderText, getByRole, getByText } = renderResult
        fireEvent.change(getByPlaceholderText('Username'), { target: { value: userInvalidUsernameMinLength } })
        fireEvent.click(getByRole('button'))
        expect(getByText('Username must be at least 3 characters')).toBeInTheDocument()
    })

    it('renders an error span element if username length is greater than required', () => {
        const { getByPlaceholderText, getByRole, getByText } = renderResult
        fireEvent.change(getByPlaceholderText('Username'), { target: { value: userInvalidUsernameMaxLength } })
        fireEvent.click(getByRole('button'))
        expect(getByText('Username must be less than 16 characters')).toBeInTheDocument()
    })

    it('renders an error span element if username already exists', async () => {
        const { getByPlaceholderText, queryByText, getByRole } = renderResult

        // Mock axios post request
        axiosMock.post.mockRejectedValueOnce({
            response: {
                data: {
                    status: HTTP_BAD_REQUEST,
                    errors: [{
                        username: 'Username is already taken'
                    }]
                },
                status: HTTP_BAD_REQUEST
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
        const { getByRole, getByText } = renderResult
        fireEvent.click(getByRole('button'))
        expect(getByText('Email is required')).toBeInTheDocument()
    })

    it('renders an error span element if email is invalid', () => {
        const { getByPlaceholderText, getByRole, getByText } = renderResult
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: userInvalidEmail } })
        fireEvent.click(getByRole('button'))
        expect(getByText('Email is not valid')).toBeInTheDocument()
    })

    it('renders an error span element if email already exists', async () => {
        const { getByPlaceholderText, queryByText, getByRole } = renderResult

        // Mock axios post request
        axiosMock.post.mockRejectedValueOnce({
            response: {
                data: {
                    status: HTTP_BAD_REQUEST,
                    errors: [{
                        email: 'Email is already taken'
                    }]
                },
                status: HTTP_BAD_REQUEST
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
        const { getByRole, getByText } = renderResult
        fireEvent.click(getByRole('button'))
        expect(getByText('Password is required')).toBeInTheDocument()
    })

    it('renders an error span element if password length is less than required', () => {
        const { getByPlaceholderText, getByRole, getByText } = renderResult
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: userInvalidPasswordMinLength } })
        fireEvent.click(getByRole('button'))
        expect(getByText('Password must be at least 8 characters')).toBeInTheDocument()
    })
})