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
  background-color: ${props => props.theme.white};
  ${props =>
    props.error
      ? `border: 5px solid ${props.theme.lightpurple}; color: ${
          props.theme.lightpurple
        };`
      : `border: 1px solid ${props.theme.darkpurple}; color: ${
          props.theme.darkpurple
        }`}
`;

const Input = props => {
  return (
    <StyledInput
      placeholder={props.placeholder}
      onChange={props.changeHandler}
      error={props.error}
      value={props.value}
      ref={input => input && input.focus()}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Input;
