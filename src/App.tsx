import React from 'react';
import { Footer, Header, Gallery } from './components';
import GlobalStyle from './styled/globalStyle';

const App = () => {
  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
