import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavElement,
  ElementLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { __PRIVATE__ } from "styled-components";
import { BiMenu } from "react-icons/bi";

const TOP_LEVEL_ROUTES = [
  {
    name: "About",
    path: "about",
    exact: true,
  },
  {
    name: "discover",
    path: "discover",
    exact: true,
  },
  {
    name: "Services",
    path: "services",
    exact: true,
  },
  {
    name: "Sign Up",
    path: "signup",
    exact: true,
  },
];

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeScrollNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScrollNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const navList = TOP_LEVEL_ROUTES.map(({ name, path, exact }) => (
    <NavElement key={name}>
      <ElementLink
        to={path}
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        exact={`${exact}`}
      >
        {name}
      </ElementLink>
    </NavElement>
  ));
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          Dollae
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <BiMenu />
        </MobileIcon>
        <NavMenu>{navList}</NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
