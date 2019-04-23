import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';

const StyledButton = styled(
    posed.button({
        hoverable: true,
        init: {
            scale: 1,
            boxShadow: '0px 0px 0px rgba(0,0,0,0)'
          },
          hover: {
            scale: 1.2,
            boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
          }
    })
  )`
    height: 5rem;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    color: ${props => props.theme.lightpurple};
    background-color: ${props => props.theme.darkpurple};
    text-transform: uppercase;
    text-decoration: none;
    `;
const Button = props => {
    return (
        <StyledButton>
            {props.label}
        </StyledButton>
    );
};

Button.propTypes = {
    
};

export default Button;