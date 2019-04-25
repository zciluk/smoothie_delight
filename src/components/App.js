import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Theme from "../style/Theme";
import Header from "./Header";
import Hero from "./Hero";
import NewsletterForm from "./NewsletterForm";
import InfoSection from "./InfoSection";
import Footer from "./Footer";
import cocktail from "../images/cocktail.jpg";
import fruits from "../images/fruits.jpg";
import runner from "../images/runner.jpg";
import weight from "../images/weight.jpg";
const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 75%; //1rem = 12px, 12/16
        ${({ theme }) => theme.tablet`
        font - size: 50 % ; //1 rem = 8px, 8/16 = 50%
        `}
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=Nunito:200,300,400,800,900');
        box-sizing: border-box;
        padding: 0rem;
        font-family: "Nunito"; 
    }
`;

class App extends Component {
  render() {
    return (
      <Theme>
        <>
          <GlobalStyle />
          <Header />
          <Hero />
          <NewsletterForm />
          <InfoSection
            image={cocktail}
            title="HEALTHY & DELICIOUS"
            desc="Our product have varity of healthy noutritions. 
          Lorem ipsum something itd itp has great effects
          on your body super new product help you get on."
          />
          <InfoSection
            opposite
            image={fruits}
            title="EVERY SMOOTHIE IS AN EXPERIENCE"
            desc="Our product have varity of healthy noutritions. 
          Lorem ipsum something itd itp has great effects
          on your body super new product help you get on."
          />
          <InfoSection
            image={weight}
            title="MAKE IT COUNT!"
            desc="Our product have varity of healthy noutritions. 
          Lorem ipsum something itd itp has great effects
          on your body super new product help you get on."
          />
          <InfoSection
            opposite
            image={runner}
            title="LOSE WEIGHT AND GAIN MUSCLE"
            desc="Our product have varity of healthy noutritions. 
          Lorem ipsum something itd itp has great effects
          on your body super new product help you get on."
          />
          <Footer />
        </>
      </Theme>
    );
  }
}
export default App;
