import { styled } from "frontity";

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