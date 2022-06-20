import React from 'react';
import { Footer, Header, Gallery } from './components';
import GlobalStyle from './styled/globalStyle';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Gallery />
    <Footer />
  </>
);

export default App;
