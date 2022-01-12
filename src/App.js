import React from 'react';
import { Footer, Header, ModalWIndow, Gallery } from './components';
import GlobalStyle from './styled/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Routes
} from "react-router-dom";

const App = () => {

  const [idModal, setIdModal] = React.useState('')
  
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Header />
        <Gallery idModal={(id) => setIdModal(id) } />
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
