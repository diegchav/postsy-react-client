import React from 'react'

import User from '../user/User.component'

import UserListContainer from './UserList.styles'

interface UserListProps {
    users: Array<any>,
    onFollowUser: Function
}

const UserList = ({ users, onFollowUser }: UserListProps) => {
    return (
        <UserListContainer>
        {
            users.map(user => <User key={user._id} user={user} onFollow={onFollowUser} />)
        }
        </UserListContainer>
    )
}

export default UserList