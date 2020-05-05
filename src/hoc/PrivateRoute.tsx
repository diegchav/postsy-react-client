import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import AuthService from '../services/auth.service'

const PrivateRoute = (props: RouteProps) => {
    const currentUser = AuthService.getCurrentUser()
    if (!currentUser) {
        return <Redirect to="/signin" />
    }

    return (
        <Route {...props} />
    )
}

export default PrivateRoute