import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarItemLink,
  SidebarBtn,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarItemLink
          to="about"
          onClick={toggle}
          offset={-80}
          duration={500}
          smooth={true}
        >
          Abouts
        </SidebarItemLink>
        <SidebarItemLink
          to="discover"
          onClick={toggle}
          offset={-80}
          duration={500}
          smooth={true}
        >
          Discover
        </SidebarItemLink>
        <SidebarItemLink
          to="services"
          onClick={toggle}
          offset={-80}
          duration={500}
          smooth={true}
        >
          services
        </SidebarItemLink>
        <SidebarItemLink
          to="signup"
          onClick={toggle}
          offset={-80}
          smooth={true}
          duration={500}
        >
          Sign Up
        </SidebarItemLink>
      </SidebarMenu>
      <SidebarBtn to="/signin">Sign In</SidebarBtn>
    </SidebarContainer>
  );
};

export default Sidebar;
