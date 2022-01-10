import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import ModalWIndow from "./components/ModalWindow/ModalWIndow";

function App() {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div>
      <Header />
      <Gallery setActive={() => setOpenModal(true)} />
      {openModal && <ModalWIndow onClose={() => setOpenModal(false)} />}
      <Footer />
    </div>
  );
}

export default App;
