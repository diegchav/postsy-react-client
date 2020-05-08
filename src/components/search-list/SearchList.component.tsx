import React from 'react'

import SearchItem from '../search-item/SearchItem.component'

interface UserListProps {
    users: Array<any>,
    onFollowUser: Function,
    onUnfollowUser: Function
}

const SearchList = ({ users, onFollowUser, onUnfollowUser }: UserListProps) => {
    return (
        <div>
        {
            users.map(user => <SearchItem key={user._id} user={user} onFollow={user.following ? onUnfollowUser : onFollowUser} />)
        }
        </div>
    )
}

export default SearchList