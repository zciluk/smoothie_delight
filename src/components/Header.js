import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import smoothie_logo from '../images/smoothie_logo.svg'
const StyledHeader = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    background: rgba(255,255,255,0);
    width: 100vw;
    height: 7rem;
    z-index: 99;
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
    /*border: 1px solid ${props => props.theme.lightpurple};*/
`;
const LogoText = styled.div`
    font-size: 1.5rem;
    font-weight: 800;
`;
const Header = props => {
    return (
        <StyledHeader>
           <HeaderContainer>
               <Logo/> <LogoText>Smoothie Delight</LogoText>
           </HeaderContainer>
        </StyledHeader>
    );
};

Header.propTypes = {
    
};

export default Header;