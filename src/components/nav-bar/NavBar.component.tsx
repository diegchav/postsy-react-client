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

    const handleLogOut = (e: React.MouseEvent<HTMLDivElement>) => {
        AuthService.logOut()
    }

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
                    ? <NavItemContainer onClick={handleLogOut}>Sign Out</NavItemContainer>
                    : <NavLinkContainer to="/signin">Sign In</NavLinkContainer>
                }
            </NavItemsContainer>
        </NavBarContainer>
    )
}

export default Header