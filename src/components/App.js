import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Theme from '../style/Theme';
import Header from './Header';
import Hero from './Hero';
import NewsletterForm from './NewsletterForm';
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
        font-size: 50%; //1 rem = 8px, 8/16 = 50%
     `}
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=Nunito:200,300,400,800');
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
                <GlobalStyle/>
                <Header/>
                <Hero/>
                <NewsletterForm/>
                </>
            </Theme>
        );
    }
}
/* <Header/>
<Hero/>
<Newsletter/> - Input and button inside
<Infosection> 
    <Image left />
    <TextHeader title="Something" desc="Other stuff"/>
</Infosection>
<Footer/>
*/
export default App;