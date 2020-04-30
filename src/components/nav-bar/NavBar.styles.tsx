import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const NavItemContainerStyles = css`
    padding: 0 1rem;
    cursor: pointer;
    color: #000;

    :hover {
        opacity: .5;
    }
`

export const NavBarContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
`

export const NavItemsContainer = styled.div`
    margin-left: auto;
    display: flex;
`

export const NavLogoContainer = styled(Link)`
    ${NavItemContainerStyles}
`

export const NavLinkContainer = styled(Link)`
    ${NavItemContainerStyles}
`

export const NavItemContainer = styled.div`
    ${NavItemContainerStyles}
`