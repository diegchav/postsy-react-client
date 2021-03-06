import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'

import App from './App';

import store from './redux/store'

import FlashMessageProvider from './providers/FlashMessage.provider'

import GlobalStyle from './GlobalStyle'

// Configure axios to treat non 2xx status codes as valid responses
axios.defaults.validateStatus = (status) => status >= 200 && status < 500

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <FlashMessageProvider>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </FlashMessageProvider>
  </Provider>,
  document.getElementById('root')
);