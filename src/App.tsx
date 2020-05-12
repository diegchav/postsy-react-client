import React, { useContext } from 'react';
import {
  Switch
} from 'react-router-dom'

import RootContainer from './containers/root/Root.container'

import BasePage from './pages/base/Base.page'
import HomePage from './pages/home/Home.page'
import SignUpPage from './pages/sign-up/SignUp.page'
import SignInPage from './pages/sign-in/SignIn.page'
import SearchPage from './pages/search/Search.page'
import ProfilePage from './pages/profile/Profile.page'
import UserProfilePage from './pages/user-profile/UserProfile.page'
import PostPage from './pages/post/Post.page'

import NavBar from './components/nav-bar/NavBar.component'
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
      <RootContainer>
        <NavBar />
        <BasePage>
          <Switch>
            <PrivateRoute path="/" exact>
              <HomePage />
            </PrivateRoute>
            <PublicRoute path="/signup" exact>
              <SignUpPage />
            </PublicRoute>
            <PublicRoute path="/signin" exact>
              <SignInPage />
            </PublicRoute>
            <PrivateRoute path="/search" exact>
              <SearchPage />
            </PrivateRoute>
            <PrivateRoute path="/profile" exact>
              <ProfilePage />
            </PrivateRoute>
            <PrivateRoute path="/profile/:userId" exact>
              <UserProfilePage />
            </PrivateRoute>
            <PrivateRoute path="/post/:id" exact>
              <PostPage />
            </PrivateRoute>
          </Switch>
        </BasePage>
      </RootContainer>
    </AppContainer>
  )
}

export default App;
