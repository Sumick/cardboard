import { createGlobalStyle } from 'styled-components'
import { Colors } from './colors'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${Colors.beige};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export default GlobalStyle
