import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './basic/Button';
import Input from './basic/Input';
const StyledContainer = styled.div`
    width: 100%;
    height: 15rem;
    background-color: ${props => props.theme.lightpurple};
    display: flex;
    align-items:center;
    flex-direction: column;
    font-weight: 200;
    font-size: 2rem;
    color: ${props => props.theme.white};
    padding: 3rem;
`;

const FormContainer = styled.div`
    display: flex;
    justify-content:center;
`;

class NewsletterForm extends Component {
    state = {
        formError:false,
        displayPopup:true
    };
    render() {
        return (
            <StyledContainer>
                STAY ALERT! SIGN UP FOR OUR MAILING LIST TO GET UPDATES
                <FormContainer>
                    <Input placeholder="Your e-mail adresss "/>
                    <Button label="GET FREE NEWSLETTER"/>
                </FormContainer>
            </StyledContainer>
        );
    }
}

export default NewsletterForm;