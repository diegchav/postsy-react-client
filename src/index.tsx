import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import App from './App';

import './index.css';

import ErrorProvider from './providers/Error.provider'

// Configure axios defaults
axios.defaults.validateStatus = (status) => status >= 200 && status < 500

ReactDOM.render(
  <ErrorProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ErrorProvider>,
  document.getElementById('root')
);