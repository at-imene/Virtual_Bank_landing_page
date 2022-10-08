import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;

  height: 80px;
  background: ${({ scrollNav }) => (scrollNav ? "#010606" : "transparent")};
  z-index: 10;
  margin-top: -80px;
  position: sticky;
  top: 0;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 25px;
  max-width: 1450px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
`;

export const MobileIcon = styled.div`
  color: #fff;
  display: none;
  font-size: 2.2rem;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavElement = styled.li`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-size: 1.2em;
`;

export const ElementLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  margin: 0 20px;
  height: 100%;

  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid #38a86e;
    transition: all 0.2s ease-in-out;
  }
  &.active {
    border-bottom: 3px solid #38a86e;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  color: #010606;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  color: black;
  font-size: 1.1em;
  padding: 10px 30px;
  border-radius: 30px;
  background: #38a86e;
  text-decoration: none;
  border: none;
  outline: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    font-weight: bold;
    color: #38a86e;
    background: #fff;
  }
`;
