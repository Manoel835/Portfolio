import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
  }
  body {
    background: linear-gradient(24deg, #05161A 50.62%, #294D61 85.61%);
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.sans};
  }
  a{
    color: transparent;
  }
`
