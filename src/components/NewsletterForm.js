import React, { Component } from "react";
import styled from "styled-components";
import Button from "./basic/Button";
import Input from "./basic/Input";
import posed, { PoseGroup } from "react-pose";

const StyledContainer = styled.article`
  width: 100%;
  height: 16rem;
  background-color: ${props => props.theme.lightpurple};
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 200;
  font-size: 2rem;
  text-align: center;
  color: ${props => props.theme.white};
  padding: 3rem;
  ${({ theme }) => theme.tablet`
    padding: 4rem;
    height: 30rem;
    `}
`;

const FormContainer = styled(
  posed.div({
    enter: { opacity: 1, transition: { duration: 450 } },
    exit: { opacity: 0, transition: { duration: 450 } }
  })
)`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.tablet`
    flex-direction: column;
    `}
`;
const SuccessMessage = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.black};
`;
class NewsletterForm extends Component {
  state = {
    formError: false,
    formSuccess: false,
    emailField: ""
  };
  handleButtonClick = () => {
    if (this.validateEmail(this.state.emailField)) {
      this.setState({ formSuccess: true });
    } else {
      this.setState({ formError: true });
    }
  };
  validateEmail = value => {
    const regex = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
    );
    return !regex.test(value) || value === "" ? false : true;
  };
  handleInputChange = e => {
    this.setState({ emailField: e.target.value, formError: false });
  };
  render() {
    return (
      <StyledContainer>
        {!this.state.formSuccess &&
          "STAY ALERT! SIGN UP FOR OUR MAILING LIST TO GET UPDATES"}
        {this.state.formSuccess && [
          <SuccessMessage>Thank you for joining the newsletter</SuccessMessage>
        ]}
        <PoseGroup>
          {!this.state.formSuccess && [
            <FormContainer key="container">
              <Input
                key="input"
                placeholder="Your e-mail adresss "
                error={this.state.formError}
                value={this.state.emailField}
                changeHandler={this.handleInputChange}
              />
              <Button
                key="button"
                label="GET FREE NEWSLETTER"
                clickHandler={this.handleButtonClick}
              />
            </FormContainer>
          ]}
        </PoseGroup>
        {this.state.formError &&
          !this.state.formSuccess &&
          "E-mail is not proper!"}
      </StyledContainer>
    );
  }
}

export default NewsletterForm;
