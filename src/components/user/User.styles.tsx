import styled from 'styled-components'

const UserContainer = styled.div`
    background-color: #fff;
    padding: .5rem 1rem;
    margin: 1rem 0;

    * {
        margin: .5rem 0;
    }

    .user {
        font-weight: bold;
    }

    button {
        cursor: pointer;
        border: none;
        padding: .25rem .5rem;
    }

    .follow {
        background-color: #2980b9;
        color: #fff;
    }

    .unfollow {
        background-color: #f2f2f2;
        color: #000;
    }
`

export default UserContainer