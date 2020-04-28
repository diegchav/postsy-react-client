import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import AuthenticationService from '../services/authentication.service'

const PrivateRoute = (props: RouteProps) => {
    const currentUser = AuthenticationService.getCurrentUser()
    if (!currentUser) {
        return <Redirect to="/signin" />
    }

    return (
        <Route {...props} />
    )
}

export default PrivateRoute