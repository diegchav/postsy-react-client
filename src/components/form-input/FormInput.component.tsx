import React from 'react'

import FormInputContainer from './FormInput.styles'

interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
    error?: string
}

const FormInput = ({ error, ...otherProps }: FormInputProps) => {

    return (
        <FormInputContainer error={error}>
            <input {...otherProps} />
            {error && <span className="error">{error}</span>}
        </FormInputContainer>
    )
}

export default FormInput