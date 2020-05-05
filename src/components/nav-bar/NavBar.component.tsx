import React from 'react'

import AuthenticationService from '../../services/authentication.service'

import {
    NavBarContainer,
    NavItemsContainer,
    NavLogoContainer,
    NavLinkContainer,
    NavItemContainer
} from './NavBar.styles'

const Header = () => {
    const currentUser = AuthenticationService.getCurrentUser()
    return (
        <NavBarContainer>
            <NavLogoContainer to="/">Home</NavLogoContainer>
            <NavLinkContainer to="/search">Search</NavLinkContainer>
            <NavItemsContainer>
                {
                currentUser
                    ? <NavItemContainer>Sign Out</NavItemContainer>
                    : <NavLinkContainer to="/signin">Sign In</NavLinkContainer>
                }
            </NavItemsContainer>
        </NavBarContainer>
    )
}

export default Header