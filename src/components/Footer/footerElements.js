import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #010606;
  color: #fff;
  /* padding: 0 50px; */
`;

export const FooterWrapper = styled.div`
  height: 480px;
  max-width: 1100px;
  margin: auto;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 90px 40px;
  }
`;

export const FooterLinksPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  margin-bottom: 5em;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterLinks = styled.div`
  margin: 0 1em;
`;
export const LinkHeader = styled.h4`
  font-size: 1.1em;
  font-weight: 600;
  text-transform: capitalize;
  padding-bottom: 1em;
`;

export const LinkQuestion = styled(Link)`
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.6em;
  color: #dadcda;
  text-decoration: none;
  display: block;
  &:hover {
    color: #38a86e;
    transition: all 0.2s ease-in-out;
  }
`;

export const FooterRights = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Logo = styled(LinkScroll)`
  font-size: 1.6em;
  font-weight: 600;
  cursor: pointer;
`;

export const RightsP = styled.p`
  font-size: 1em;
  font-weight: 300;
  color: #dadcda;
  padding: 20px 0;
  text-align: center;

  @media screen and (max-width: 420px) {
    font-size: 0.9em;
  }
`;

export const Icons = styled.div`
  display: flex;
`;
export const Icon = styled.a`
  color: #fff;
  margin: 0 0.6em;
  font-size: 1.2em;
  cursor: pointer;
  &:hover {
    color: #38a86e;
    transition: all 0.2s ease-in-out;
  }
`;
