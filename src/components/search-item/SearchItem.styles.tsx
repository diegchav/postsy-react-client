import styled from 'styled-components'

const SearchItemContainer = styled.div`
    background-color: #fff;
    padding: 1.5rem 1rem;
    margin: 1rem 0;
    display: flex;

    .avatar {
        width: 48px;
        margin-right: 1rem;
    }

    .user {
        .name {
            font-weight: bold;
        }

        .bio,
        .no-bio {
            font-size: .9rem;
            margin-top: .5rem;
        }

        .no-bio {
            font-style: italic;
        }
    }

    .actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: auto;

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
    }
`

export default SearchItemContainer