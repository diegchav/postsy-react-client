import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { connect } from 'react-redux'


import { User } from '../redux/auth/auth.reducer'
import { selectCurrentUser } from '../redux/auth/auth.selectors'
import { AppState } from '../redux/root-reducer'

interface PrivateRouteProps {
    currentUser: User | null
}

const PrivateRoute = ({ currentUser, children, ...rest }: React.PropsWithChildren<PrivateRouteProps & RouteProps>) => {
    return <Route
        {...rest}
        render={() =>
            currentUser ? (
                children
            ) : (
                <Redirect to="/signin" />
            )
        }
    />
}

const mapStateToProps = (state: AppState) => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(PrivateRoute)