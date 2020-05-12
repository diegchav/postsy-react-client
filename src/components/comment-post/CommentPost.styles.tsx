import styled from 'styled-components'

const CommentPostContainer = styled.div`
    width: 100%;

    textarea {
        width: 100%;
        padding: 1rem .5rem;
    }

    button {
        display: block;
        margin-left: auto;
        margin-top: .5rem;
        padding: .5rem 0;
        background-color: #2980b9;
        color: #fff;
        border: none;
        border-radius: 20px;
        width: 100px;    
        cursor: pointer;
        font-size: .8rem;
    }
`

export default CommentPostContainer