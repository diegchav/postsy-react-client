import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    width: 300px;
    
    .title {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;

        button {
            background-color: #2980b9;
            color: #fff;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 20px;
            font-size: 1rem;
            margin-top: .5rem;
            cursor: pointer;
        }

        button:disabled {
            opacity: .75;
            cursor: not-allowed;
        }
    }

    .link {
        font-size: .9rem;
        text-align: right;
        margin-top: 1rem;

        a:link,
        a:visited,
        a:hover,
        a:active {
            color: #2980b9;
        }
    }
`