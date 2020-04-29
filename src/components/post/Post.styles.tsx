import styled from 'styled-components'

const PostContainer = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 5px;

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
`

export default PostContainer