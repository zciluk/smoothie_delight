import React from "react";

import styled from "styled-components";
import smoothie_logo from "../images/smoothie_logo.svg";
const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0);
  width: 100%;
  height: 7rem;
  z-index: 99;
  ${({ theme }) => theme.tablet`
    height: 5rem;
   `}
`;
const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;
const Logo = styled.img.attrs({
  src: smoothie_logo
})`
  height: 4rem;
  ${({ theme }) => theme.phone`
    height: 3rem;
   `}
`;
const LogoText = styled.figcaption`
  padding-left: 0.5rem;
  font-size: 1.5rem;
  font-weight: 800;
  ${({ theme }) => theme.phone`
  font-size: 1.2rem;
 `}
`;
const Header = props => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo /> <LogoText>Smoothie Delight</LogoText>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
