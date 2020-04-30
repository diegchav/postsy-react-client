import styled from 'styled-components'

const CreatePostModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-box {
        width: 50%;
        background-color: #fff;
        margin: 0;
        padding: 1rem 1.5rem;
        border-radius: 5px;

        textarea {
            width: 100%;
            height: 100px;
            margin-top: 1rem;
            padding: .5rem;            
        }

        .actions {
            display: flex;
            justify-content: end;
            margin-top: 1rem;

            button {
                border: none;
                border-radius: 2.5px;
                margin: 0 .5rem;
                padding: .5rem 1rem;
                cursor: pointer;
            }

            button:hover {
                opacity: .8;
            }

            .create {
                background-color: #2980b9;
                color: #fff;
            }
        }
    }
`

export default CreatePostModalContainer