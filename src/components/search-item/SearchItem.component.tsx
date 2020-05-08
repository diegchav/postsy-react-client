import React from 'react'
import { Link } from 'react-router-dom'

import SearchItemContainer from './SearchItem.styles'

interface UserProps {
    user: any,
    onFollow: Function
}

const User = ({ user: { _id, name, bio, avatar, following }, onFollow }: UserProps) => {
    return (
        <SearchItemContainer>
            <img className="avatar" src={avatar} alt="avatar" />
            <div className="user">
                <Link className="name" to={`/profile/${_id}`}>{name}</Link>
                {bio
                    ? <p className="bio">{bio}</p>
                    : <p className="no-bio">No bio</p>
                }
            </div>
            <div className="actions">
                <button
                    className={following ? 'unfollow' : 'follow'}
                    onClick={() => onFollow(_id)}
                >
                    {following ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </SearchItemContainer>
    )
}

export default User