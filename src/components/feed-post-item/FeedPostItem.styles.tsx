import styled from 'styled-components'

const FeedPostItemContainer = styled.div`
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
                font-size: .8rem;
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
        max-width: 100%;
        margin: 1rem auto 0;
    }

    .actions {
        display: flex;
        margin-top: 1rem;

        > * {
            margin: 0 .25rem;
        }

        button {
            padding: 0;
        }
    }
`

export default FeedPostItemContainer