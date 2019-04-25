import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 10rem;
  background-color: ${props => props.theme.darkpurple};
  color: ${props => props.theme.white};
  font-size: 1.2rem;
  padding: 3rem 6rem;
  font-weight: 200;
`;
const Footer = () => {
  return (
    <StyledFooter>
      © Smoothie Delight 2019
      <p>District 1 1656 Union Street Eureka 707-445-6600 </p>
    </StyledFooter>
  );
};

export default Footer;
