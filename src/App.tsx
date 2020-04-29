import React, { useContext } from 'react';
import {
  Switch
} from 'react-router-dom'

import HomePage from './pages/home/Home.page'
import SignUpPage from './pages/sign-up/SignUp.page'
import SignInPage from './pages/sign-in/SignIn.page'

import ModalMessage from './components/modal-message/ModalMessage.component'

import PublicRoute from './hoc/PublicRoute'
import PrivateRoute from './hoc/PrivateRoute'

import { FlashMessageContext } from './providers/FlashMessage.provider'

import AppContainer from './App.styles'

const App = () => {
  const { message, type } = useContext(FlashMessageContext)

  return (
    <AppContainer>
      <ModalMessage message={message} type={type} />
      <Switch>
        <PublicRoute path="/signup">
          <SignUpPage />
        </PublicRoute>
        <PublicRoute path="/signin">
          <SignInPage />
        </PublicRoute>
        <PrivateRoute path="/">
          <HomePage />
        </PrivateRoute>
      </Switch>
    </AppContainer>
  )
}

export default App;
