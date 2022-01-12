import React from 'react';
import { Footer, Header, ModalWIndow, Gallery } from './components';
import GlobalStyle from './styled/globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Gallery setActive={() => setOpenModal(true)} />
      {openModal && <ModalWIndow onClose={() => setOpenModal(false)} />}
      <Footer />
    </div>
  );
}

export default App;
