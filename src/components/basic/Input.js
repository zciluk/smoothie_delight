import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 22rem;
    height: 5rem;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    font-size: 1.5rem;
    font-family: inherit;
    color: ${props => props.theme.darkpurple}; 
    background-color: rgba(${props => props.theme.lightpurple}, .5);
    border: none;
    border-bottom: 3px solid transparent;

`;
const Input = props => {
    return (
        <StyledInput placeholder={props.placeholder}/>
    );
};

Input.propTypes = {
    
};

export default Input;