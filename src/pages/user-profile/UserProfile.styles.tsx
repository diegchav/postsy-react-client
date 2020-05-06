import styled from 'styled-components'

export const ItemContainer = styled.div`
    background-color: #fff;
    height: 100px;
    margin: .5rem 0;
    padding: 1rem .5rem;
`

const UserProfilePageContainer = styled.div`
    width: 60%;
    height: 90%;
    margin: 0 auto;
    padding: 2.5rem 0;

    .user-details {
        background-color: #fff;
        margin-top: 1rem;
        padding: 1rem .5rem;
    }

    .following-and-followers {
        display: flex;
        margin-top: 2rem;
        justify-content: space-between;
    }

`
export default UserProfilePageContainer