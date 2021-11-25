import { styled } from "frontity";

export const ContainerCustomer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  padding: 0;
  background-color: #eeedeb;
`;

export const ContainerLaptop = styled.nav`
    positon: relative;
    display: block;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ContainerMobie = styled.nav`
    positon: relative;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;
