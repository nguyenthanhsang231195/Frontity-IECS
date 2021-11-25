import { css, styled } from "frontity";

export const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
`;

export const Main = styled.div`
  display: block;
  max-width: 1920px;
  justify-content: center;
  margin: auto;
  background-color: white;
  color: black;
`;

