// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Component Imports
import App from './components/App/App';

//UI Imports
import './index.scss';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
