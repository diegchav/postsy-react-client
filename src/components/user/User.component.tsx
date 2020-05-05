import React from 'react'

import UserContainer from './User.styles'

interface UserProps {
    user: any
}

const User = ({ user }: UserProps) => (
    <UserContainer>
        {user.username}
    </UserContainer>
)

export default User