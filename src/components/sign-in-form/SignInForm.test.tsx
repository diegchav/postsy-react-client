import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import axios from 'axios'
import {
    render,
    fireEvent,
    waitFor,
} from '@testing-library/react'

import SignInForm from './SignInForm.component'
import { HTTP_BAD_REQUEST, VALIDATION_ERROR } from '../../constants'

jest.mock('axios')

const axiosMock = axios as jest.Mocked<typeof axios>

/**
 * Mock data.
 */
const userValidEmail = 'test@example.com'
const userValidPassword = 'password'
const userInvalidEmail = 'test'

describe('<SignInForm />', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders an error span element if email is not provided', () => {
        const { getByRole, getByText } = render(
            <MemoryRouter>
                <SignInForm />
            </MemoryRouter>
        )
        fireEvent.click(getByRole('button'))
        expect(getByText('Email is required')).toBeInTheDocument()
    })

    it('renders an error span if email is invalid', () => {
        const { getByRole, getByPlaceholderText, getByText } = render(
            <MemoryRouter>
                <SignInForm />
            </MemoryRouter>
        )
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: userInvalidEmail } })
        fireEvent.click(getByRole('button'))
        expect(getByText('Email is not valid')).toBeInTheDocument()
    })

    it('renders an error span element if password is not provided', () => {
        const { getByRole, getByText } = render(
            <MemoryRouter>
                <SignInForm />
            </MemoryRouter>
        )
        fireEvent.click(getByRole('button'))
        expect(getByText('Password is required')).toBeInTheDocument()
    })

    it('disables the submit button while performing sign in', async () => {
        const { getByRole, getByPlaceholderText } = render(
            <MemoryRouter>
                <SignInForm />
            </MemoryRouter>
        )

        // Mock axios response
        axiosMock.post.mockResolvedValueOnce({
            data: {
                status: HTTP_BAD_REQUEST,
                message: VALIDATION_ERROR,
                errors: [{
                    email: 'Email is required'
                }]
            }
        })

        const submitButton = getByRole('button')
        expect(submitButton).not.toHaveAttribute('disabled')

        // Submit form
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: userValidEmail } })
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: userValidPassword }})
        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(submitButton).toHaveAttribute('disabled')
        })

        expect(submitButton).not.toHaveAttribute('disabled')
    })
})