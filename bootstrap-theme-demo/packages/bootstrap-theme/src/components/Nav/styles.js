import { styled } from "frontity";

export const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  max-width: 1920px;
  box-sizing: border-box;
  padding: 0 24px;
  margin-top: 20px;
  overflow-x: auto;

  @media screen and (max-width: 576px) {
    display: none;
  }

  a:hover {
    color: red;
    font-weight: bold;
  }
`;

export const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: black;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
