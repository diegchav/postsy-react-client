import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import App from './App';

import './index.css';

import FlashMessageProvider from './providers/FlashMessage.provider'

// Configure axios defaults
axios.defaults.validateStatus = (status) => status >= 200 && status < 500

ReactDOM.render(
  <FlashMessageProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </FlashMessageProvider>,
  document.getElementById('root')
);