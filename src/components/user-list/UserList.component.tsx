import React from 'react'

import User from '../user/User.component'

import UserListContainer from './UserList.styles'

interface UserListProps {
    users: Array<any>
}

const UserList = ({ users }: UserListProps) => {
    return (
        <UserListContainer>
        {
            users.map(user => <User user={user} />)
        }
        </UserListContainer>
    )
}

export default UserList