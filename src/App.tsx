import React, { useContext } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './pages/home/Home.page'
import SignUpPage from './pages/sign-up/SignUp.page'
import SignInPage from './pages/sign-in/SignIn.page'

import ModalMessage from './components/modal-message/ModalMessage.component'

import PrivateRoute from './hoc/PrivateRoute'

import { ErrorContext } from './providers/Error.provider'

import AppContainer from './App.styles'

const App = () => {
  const { error } = useContext(ErrorContext)

  return (
    <AppContainer>
      <ModalMessage error={error} />
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <PrivateRoute path="/">
          <HomePage />
        </PrivateRoute>
      </Switch>
    </AppContainer>
  )
}

export default App;
