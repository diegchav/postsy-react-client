import React from 'react'
import { render } from '@testing-library/react'

import FormInput from './FormInput.component'

describe('<FormInput />', () => {
    it('renders an span element  if a non-empty error prop is passed', () => {
        const { container } = render(<FormInput error="some error" />)
        expect(container.getElementsByTagName('span')).toHaveLength(1)
    })

    it('renders only an input element if an empty error prop is passed', () => {
        const { container } = render(<FormInput error="" />)
        expect(container.getElementsByTagName('span')).toHaveLength(0)
    })
})