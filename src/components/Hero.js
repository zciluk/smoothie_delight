import React from 'react';
import styled from 'styled-components';
import hero from '../images/hero_big.jpg';
import hero_small from '../images/hero_small.jpg';

import StoryText from './StoryText';
const StyledHero = styled.div`
    background: ${props => props.theme.white};
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    background: url(${hero}) no-repeat;
    background-size: cover;
    ${({ theme }) => theme.tablet`
    background:  url(${hero_small}) no-repeat ;
    background-size: cover;
    `}   
`;
const HeroContainer = styled.div`
    width: 80%;
    
`;

const Hero = props => {
  
        return (
        <StyledHero>
            <HeroContainer>
               <StoryText/>
            </HeroContainer>
        </StyledHero>
        );
};


export default Hero;