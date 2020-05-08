import styled from 'styled-components'

export const ItemContainer = styled.div`
    background-color: #fff;
    height: 100px;
    margin: .5rem 0;
    padding: 1rem .5rem;
    display: flex;
    align-items: center;

    .avatar {
        width: 48px;
        margin-right: 1rem;
    }

    .user {
        .bio,
        .no-bio {
            font-size: .9rem;
            margin-top: .5rem;
        }

        .no-bio {
            font-style: italic;
        }
    }
`

const UserProfilePageContainer = styled.div`
    width: 60%;
    height: 90%;
    margin: 0 auto;
    padding: 2.5rem 0;

    .info {
        background-color: #fff;
        margin-top: 1rem;
        padding: 1rem .5rem;
        display: flex;

        .avatar {
            width: 48px;
            margin-right: 1rem;
        }

        .user {
            .bio,
            .no-bio {
                font-size: .95rem;
                margin-top: .5rem;
            }

            .no-bio {
                font-style: italic;
            }
        }
    }

    .following-and-followers {
        display: flex;
        margin-top: 2rem;
        justify-content: space-between;
    }
`
export default UserProfilePageContainer