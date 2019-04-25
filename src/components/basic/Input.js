import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 22rem;
  height: 5rem;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  font-size: 1.5rem;
  font-family: inherit;

  background-color: rgba(${props => props.theme.lightpurple}, 0.5);
  ${props =>
    props.error
      ? `border: 5px solid black; color: red;`
      : `border: 0px solid transparent; color: ${props.theme.darkpurple}`}
`;
const Input = props => {
  return (
    <StyledInput
      placeholder={props.placeholder}
      onChange={props.changeHandler}
      error={props.error}
      value={props.value}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Input;
