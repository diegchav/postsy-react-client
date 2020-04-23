import React from 'react'
import { shallow } from 'enzyme'

import FormInput from './FormInput.component'

describe('<FormInput />', () => {
    it('renders an span element  if a non-empty error prop is passed', () => {
        const wrapper = shallow(<FormInput error="some error" />)
        expect(wrapper.find('span')).toHaveLength(1)
    })

    it('renders only an input element if an empty error prop is passed', () => {
        const wrapper = shallow(<FormInput error="" />)
        expect(wrapper.find('span')).toHaveLength(0)
    })
})