import React from 'react'

import UserContainer from './User.styles'

interface UserProps {
    user: any
}

const User = ({ user: { name, following } }: UserProps) => {
    return (
        <UserContainer>
            <div className="user">
                {name}
            </div>
            <button
                className={following ? 'unfollow' : 'follow'}
            >
                {following ? 'Unfollow' : 'Follow'}
            </button>
        </UserContainer>
    )
}

export default User