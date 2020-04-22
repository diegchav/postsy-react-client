import React from 'react'

import FormInputContainer from './form-input.styles'

interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
    error: String
}

const FormInput = ({ error, ...otherProps }: FormInputProps) => {

    return (
        <FormInputContainer>
            <input {...otherProps} />
            <span className="error">{error}</span>
        </FormInputContainer>
    )
}

export default FormInput