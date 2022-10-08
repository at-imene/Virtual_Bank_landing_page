import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #010606;

  position: fixed;
  /* z-index: ${({ isVisible }) => (isVisible ? "999" : "-1")}; */
  z-index: 999;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};

  transition: all 0.2s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 1.8rem;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 70px);
  }
`;

export const SidebarItemLink = styled(LinkS)`
  text-decoration: none;
  color: #fff;
  font-size: 1.4em;
  padding: 0.5em;
  cursor: pointer;

  &:hover {
    color: #38a86e;
    transition: all 0.2 ease-in-out;
  }
`;

export const SidebarBtn = styled(LinkR)`
  display: block;
  background: #38a86e;
  width: 30%;
  text-decoration: none;
  text-align: center;
  font-size: 1.2em;
  font-weight: 500;
  white-space: nowrap;
  color: #010606;
  padding: 10px 2em;
  border-radius: 30px;
  transition: 0.2 ease-in-out;
  &:hover {
    background-color: #fff;
    color: #38a86e;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.1em;
    width: 40%;
    padding: 0.5em 0;
  }
`;
