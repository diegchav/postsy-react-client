import styled from 'styled-components'

interface FormInputContainerProps {
    error?: string
}

const FormInputContainer = styled.div<FormInputContainerProps>`
    display: flex;
    flex-direction: column;
    margin: .5rem 0 0;
    height: 60px;

    input {
        padding: .5rem 1rem;
        display: block;
        border: ${props => props.error ? '1px solid #e74c3c' : '1px solid #ccc' };
    }

    input:focus {
        border: 1px solid #2980b9;
    }

    .error {
        color: #e74c3c;
        font-size: .75rem;
        margin-top: .5rem;
    }
`

export default FormInputContainer