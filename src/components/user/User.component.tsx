import React from 'react'
import { Link } from 'react-router-dom'

import UserContainer from './User.styles'

interface UserProps {
    user: any,
    onFollow: Function
}

const User = ({ user: { _id, name, following }, onFollow }: UserProps) => {
    return (
        <UserContainer>
            <div className="user">
                <Link to={`/profile/${_id}`}>{name}</Link>
            </div>
            <button
                className={following ? 'unfollow' : 'follow'}
                onClick={() => onFollow(_id)}
            >
                {following ? 'Unfollow' : 'Follow'}
            </button>
        </UserContainer>
    )
}

export default User