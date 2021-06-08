import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  
`

export default GlobalStyle;