import React from 'react';
import styled from 'styled-components';
import { Footer, Header, Gallery } from './components';
import GlobalStyle from './styled/globalStyle';

const BodyStyle = styled.div`
  display:flex; 
  flex-direction:column;
  height: 100vh; 
  margin: 0;
`

const App = () => (
  <BodyStyle>
    <GlobalStyle />
    <Header />
    <Gallery />
    <Footer />
  </BodyStyle>
);

export default App;
