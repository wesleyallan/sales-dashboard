import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-synthesis: none;
    font-size: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    display: grid;
    place-content: center;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.purple900};
  }
`;
