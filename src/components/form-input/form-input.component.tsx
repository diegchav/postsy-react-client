import React from 'react'

import FormInputContainer from './form-input.styles'

interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
    error: string
}

const FormInput = ({ error, ...otherProps }: FormInputProps) => {

    return (
        <FormInputContainer error={error}>
            <input {...otherProps} />
            {error
                ? <span className="error">{error}</span>
                : null
            }
        </FormInputContainer>
    )
}

export default FormInput