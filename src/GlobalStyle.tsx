import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  textarea {
    font-size: .85rem;
  }
`

export default GlobalStyle