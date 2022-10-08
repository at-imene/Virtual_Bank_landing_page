import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterLinks,
  FooterLinksList,
  FooterLinksPart,
  FooterRights,
  FooterWrapper,
  Icon,
  Icons,
  LinkHeader,
  LinkQuestion,
  Logo,
  RightsP,
} from "./footerElements";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksPart>
          <FooterLinksList>
            <FooterLinks>
              <LinkHeader>About Us</LinkHeader>
              <LinkQuestion to="/signin">How it works</LinkQuestion>
              <LinkQuestion to="/signin">Testimonials</LinkQuestion>
              <LinkQuestion to="/signin">Carrers</LinkQuestion>
              <LinkQuestion to="/signin">Investors</LinkQuestion>
              <LinkQuestion to="/signin">Terms of Service</LinkQuestion>
            </FooterLinks>
            <FooterLinks>
              <LinkHeader>Contact Us</LinkHeader>
              <LinkQuestion to="/signin">Contact</LinkQuestion>
              <LinkQuestion to="/signin">Support</LinkQuestion>
              <LinkQuestion to="/signin">Destinations</LinkQuestion>
              <LinkQuestion to="/signin">Sponsorships</LinkQuestion>
            </FooterLinks>
            <FooterLinks>
              <LinkHeader>Videos</LinkHeader>
              <LinkQuestion to="/signin">Submit Video</LinkQuestion>
              <LinkQuestion to="/signin">Ambassadors</LinkQuestion>
              <LinkQuestion to="/signin">Agency</LinkQuestion>
              <LinkQuestion to="/signin">Influencer</LinkQuestion>
            </FooterLinks>
            <FooterLinks>
              <LinkHeader>Social Media</LinkHeader>
              <LinkQuestion to="/signin">Instagram</LinkQuestion>
              <LinkQuestion to="/signin">Facebook</LinkQuestion>
              <LinkQuestion to="/signin">Youtube</LinkQuestion>
              <LinkQuestion to="/signin">Twitter</LinkQuestion>
            </FooterLinks>
          </FooterLinksList>
        </FooterLinksPart>
        <FooterRights>
          <Logo to="/" onClick={scrollToTop}>
            Dollae
          </Logo>
          <RightsP>
            Dollae &copy; {new Date().getFullYear()} All rights reserved.
          </RightsP>
          <Icons>
            <Icon href="/" aria-label="Facebook" target="_blank">
              <FaFacebook />
            </Icon>
            <Icon href="/" aria-label="Instagram" target="_blank">
              <FaInstagram />
            </Icon>
            <Icon
              href="https://www.youtube.com"
              aria-label="Youtube"
              target="_blank"
            >
              <FaYoutube />
            </Icon>
            <Icon
              href="https://www.twitter.com"
              aria-label="Twitter"
              target="_blank"
            >
              <FaTwitter />
            </Icon>
            <Icon
              href="https://www.linkedin.com"
              aria-label="Linkedin"
              target="_blank"
            >
              <FaLinkedin />
            </Icon>
          </Icons>
        </FooterRights>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
