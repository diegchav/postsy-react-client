import React from 'react'

import User from '../user/User.component'

import UserListContainer from './UserList.styles'

interface UserListProps {
    users: Array<any>
}

const UserList = ({ users }: UserListProps) => {return (
        <UserListContainer>
        {
            users.map(user => <User key={user._id} user={user} />)
        }
        </UserListContainer>
    )
}

export default UserList