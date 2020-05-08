import styled from 'styled-components'

const PostContainer = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    .user-details {
        display: flex;
        align-items: center;

        .avatar {
            width: 48px;
            margin-right: 1rem;
        }

        .user {
            .author {
                font-weight: bolder;
            }

            .timestamp {
                font-size: .7rem;
                margin-top: .25rem;
                opacity: .75;
            }
        }
    }

    .post-text {
        font-weight: lighter;
        margin-top: 1rem;
    }

    .post-image {
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