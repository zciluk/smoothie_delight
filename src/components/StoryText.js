import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const MainText = styled.div`
    padding-top: 13rem;
    font-size: 6.5rem;
    font-weight: 800;
    text-transform: uppercase;
    color: ${props => props.theme.white};
    text-shadow: 1px 6px 5px ${props => props.theme.darkpurple};
    ${({ theme }) => theme.tablet`
    font-size: 5.5rem;
    text-shadow: 1px 4px 4px ${props => props.theme.darkpurple};
    `}   
`;

const BlinkingCursor = styled(
    posed.span({
      hidden: {
        opacity: 0
      },
      visible: { opacity: 1 }
    })
  )`
    opacity: 0;
    `;
const PurpleText=  styled.span`
    color: ${props => props.theme.lightpurple}; 
    `;    
class StoryText extends Component {
    // state is holding variables for animations: isVisible for cursor blinking, first keyword displayed, and set of keywords to display 
    state = {   isVisible: true,
        keyword: "mind",
        typingMode: "",
        keywordsStack: ["mind", "soul", "body", "feelings", "mind"]};

    componentDidMount() {
        //setting intervals for blinking and text keyword change
    setInterval(() => {
    this.setState({ isVisible: !this.state.isVisible });
    }, 800);
    setInterval(() => {
        // conditions for keyword change animations: "delete" deletes whole keyword letter by letter, "put" writes new word letter by letter, when typingMode is empty, typingMode variable is filled with "put" or "delete" respectively to add proper delay before writing/deleting (this is crazy idea I've just invented, nethertheless it is working ;)
        if(this.state.typingMode === "delete") { this.deleteKeyword(); 
        } else if(this.state.typingMode === "put") { this.putKeyword(this.state.keywordsStack[0]); 
        } else if(this.state.keyword === "") {
            console.log(this.state.keywordsStack);
            this.setState({ typingMode: this.state.typingMode + "put"[this.state.typingMode.length]})
        } else if(this.state.keyword !== "") {
            this.setState({ typingMode: this.state.typingMode + "delete"[this.state.typingMode.length]})
        }
    }, 250);
    }
    deleteKeyword() {
    (this.state.keyword==="") ? this.setState({ keywordsStack: this.state.keywordsStack.slice(1), typingMode: ""  }) : this.setState({ keyword: this.state.keyword.slice(0, -1)})
    }
    putKeyword(word) {
    (word.length === this.state.keyword.length) ? this.setState({  typingMode: "", keywordsStack: [...this.state.keywordsStack, word]}) : this.setState({ keyword: this.state.keyword + word[this.state.keyword.length]})
    }
    render() {
        const { isVisible, keyword } = this.state;
        return (
            <MainText>Eat healthy, have <p>healthier <PurpleText>{keyword}</PurpleText><BlinkingCursor pose={isVisible ? 'visible' : 'hidden'}>|</BlinkingCursor></p></MainText> 
        );
    }
}

export default StoryText;