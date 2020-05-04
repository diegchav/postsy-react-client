import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const NavItemContainerStyles = css`
    padding: 0 1rem;
    cursor: pointer;
    color: #636e72;

    :hover {
        opacity: .85;
    }
`

export const NavBarContainer = styled.div`
    width: 100%;
    height: 10%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #636e72;
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