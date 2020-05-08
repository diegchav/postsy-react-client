import styled from 'styled-components'

const AccountSettingsContainer = styled.div`
    width: 100%;

    h1 {
        font-size: 1.25rem;
    }

    .form {
        background-color: #fff;
        margin-top: .5rem;
        padding: .5rem 1rem;
        display: flex;
        flex-direction: column;

        * {
            margin: 1rem 0;
        }

        .avatar {
            width: 100px;
            display: flex;
            justify-content: center;
            margin: 0;

            img {
                width: 48px;
            }
        }

        .input-form {
            display: flex;
            width: 100%;
            margin: 0 auto;

            label {
                font-weight: bolder;
                text-align: right;
                margin-right: 1rem;
                width: 100px;
            }

            input,
            textarea {
                width: 50%;
                padding: .25rem .5rem;
            }
        }

        button {
            background-color: #2980b9;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: .25rem 0;
            cursor: pointer;
            font-size: 1.1rem;
        }
    }
`
export default AccountSettingsContainer