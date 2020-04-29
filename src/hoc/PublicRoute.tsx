import React from 'react'
import { RouteProps, Redirect, Route } from 'react-router-dom'

import AuthenticationService from '../services/authentication.service'

const PublicRoute = (props: RouteProps) => {
    const currentUser = AuthenticationService.getCurrentUser()
    // If user is already signed in, redirect to home page
    if (currentUser && ['/signin', '/signup'].includes(props.location?.pathname || '')) {
        return <Redirect to="/" />
    }

    return (
        <Route {...props} />
    )
}

export default PublicRoute