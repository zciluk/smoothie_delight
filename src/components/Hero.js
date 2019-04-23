import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import hero from '../images/hero_big.jpg';
import hero_small from '../images/hero_small.jpg';

const StyledHero = styled.div`
    background: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: url(${hero}) no-repeat;
    background-size: cover;
    ${({ theme }) => theme.tablet`
    background:  url(${hero_small}) no-repeat ;
    `}   
`;
const HeroContainer = styled.div`
    width: 80%;
    
`;
const MainText = styled.div`
    padding-top: 12rem;
    font-size: 6.5rem;
    font-weight: 800;
    text-transform: uppercase;
    color: white;
    text-shadow: 1px 6px 5px #000000;
`;

const Hero = props => {
    return (
        <StyledHero>
            <HeroContainer>
                <MainText>Eat healthy, have <p>healthier mind</p></MainText> 
            </HeroContainer>
        </StyledHero>
    );
};

Hero.propTypes = {
    
};

export default Hero;