import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
