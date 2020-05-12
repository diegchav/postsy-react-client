import styled from 'styled-components'

const CommentItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: .5rem 0;
    padding: 1rem;

    .comment__meta {
        display: flex;

        .comment__user-avatar {
            width: 48px;
            margin-right: 1rem;
        }

        .comment__info {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .comment__author {
                font-weight: bolder;
            }

            .comment__timestamp {
                font-size: .8rem;
                opacity: .75;
            }
        }
    }

    .comment__text {
        margin-top: 1rem;
    }
`

export default CommentItemContainer