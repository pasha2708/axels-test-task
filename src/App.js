import React from 'react';
import { Footer, Header, Gallery } from './components';
import GlobalStyle from './styled/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

const App = () => {
   const data = useSelector(state => state);
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Header />
        <Gallery data={ data } />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
