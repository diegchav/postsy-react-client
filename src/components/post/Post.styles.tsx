import styled from 'styled-components'

const PostContainer = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    .author {
        font-weight: bolder;
    }

    .timestamp {
        font-size: .7rem;
        margin-top: .25rem;
        opacity: .75;
    }

    .text {
        font-weight: lighter;
        margin-top: 1rem;
    }

    img {
        margin-top: 1rem;
    }

    button {
        margin-top: 1rem;
        background-color: #c0392b;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: .25rem 0;
        cursor: pointer;
    }
`

export default PostContainer