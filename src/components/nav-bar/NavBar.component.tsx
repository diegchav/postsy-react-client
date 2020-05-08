import React from 'react'

import AuthService from '../../services/auth.service'

import {
    NavBarContainer,
    NavItemsContainer,
    NavLogoContainer,
    NavLinkContainer,
    NavItemContainer
} from './NavBar.styles'

const Header = () => {
    const currentUser = AuthService.getCurrentUser()
    return (
        <NavBarContainer>
            <NavLogoContainer to="/">Home</NavLogoContainer>
            {currentUser
                ? (
                <>
                <NavLinkContainer to="/search">Search</NavLinkContainer>
                <NavLinkContainer to="/profile">Profile</NavLinkContainer>
                </>
                )
                : null
            }
            <NavItemsContainer>
                {currentUser
                    ? <NavItemContainer>Sign Out</NavItemContainer>
                    : <NavLinkContainer to="/signin">Sign In</NavLinkContainer>
                }
            </NavItemsContainer>
        </NavBarContainer>
    )
}

export default Header