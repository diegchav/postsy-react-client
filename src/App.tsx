import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './pages/home/Home.page'
import SignUpPage from './pages/sign-up/SignUp.page'

import AppContainer from './App.styles'

const App = () => (
  <AppContainer>
    <Switch>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </AppContainer>
)

export default App;
