import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --light-blue: #e8f4f8;
    --main-blue: #0070f3;
    --white: #fff;
    --gray-250: #696969;
    --gray-500: #8c8c8c
    --gray-750: #4d4d4d;
    --black: #000;
  }

  @media(max-width: 1000px) {
    html {
      font-size: 93.75%
    }
  }

  @media(max-width: 1000px) {
    html {
      font-size: 87.5%
    }
  }

  body {
    background: var(--white);
    color: var(--black);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }
`
