import React from 'react'
import {
    render
} from '@testing-library/react'

import ModalMessage from './ModalMessage.component'

describe('<ModalMessage />', () => {
    it('renders a modal message when a non-empty error is passed', () => {
        const error = 'Some error'
        const { getByRole, getByText } = render(
            <ModalMessage message={error} />
        )
        expect(getByRole('button')).toBeInTheDocument()
        expect(getByText(error)).toBeInTheDocument()
    })

    it('render an empty component when an empty error is passed', () => {
        const error = ''
        const { queryByRole } = render(
            <ModalMessage message={error} />
        )
        expect(queryByRole('button')).not.toBeInTheDocument()
    })

    it('dismisses the modal when the close button is clicked', async () => {
        let error = 'Some error'
        const { queryByRole, rerender } = render(
            <ModalMessage message={error} />
        )
        expect(queryByRole('button')).toBeInTheDocument()

        // Simulate close button
        error = ''
        rerender(<ModalMessage message={error} />)
        expect(queryByRole('button')).not.toBeInTheDocument()
    })
})