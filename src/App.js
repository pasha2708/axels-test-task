import React from 'react';
import { Footer, Header, Gallery } from './components';
import GlobalStyle from './styled/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
 
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Header />
        <Gallery />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
