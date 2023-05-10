import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Italiana', serif;
  }

  body {
    background-color: #f6f6f6;
  }

  #root > main.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
