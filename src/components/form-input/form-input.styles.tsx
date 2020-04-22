import styled from 'styled-components'

const FormInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5rem 0 0;

    input {
        padding: .5rem 1rem;
        display: block;
    }

    .error {
        color: #e74c3c;
        font-size: .75rem;
        margin-top: .5rem;
        height: 1rem;
    }
`

export default FormInputContainer