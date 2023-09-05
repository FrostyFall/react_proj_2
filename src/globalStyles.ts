import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-primary: rgba(0, 0, 0, 1);
    --bg-secondary: rgba(21, 21, 21, 1);
    --primary: rgba(255, 0, 128, 1);
    --primary-dark: rgba(245, 0, 128, 1);
    font-size: 16px;
  }

  html {
    scroll-behavior: smooth;
    background-color: var(--bg-primary);
  }

  body {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    line-height: 1.4;
    background-color: var(--bg-primary);
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default GlobalStyles;
